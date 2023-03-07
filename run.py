from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

with open("db.json", encoding='utf-8') as f:
    clients = json.load(f)


@app.route('/get', methods=['GET'])
def get_client():
    return jsonify(clients)



@app.route('/searchid/<int:id>', methods=['GET'])
def get_clientid(id):
    clientid = [client for client in clients if client['id'] == id]
    return jsonify(clientid)


@app.route('/add', methods=['POST'])
def add_client():
    client = {
        'id': clients[-1]['id']+1,
        'doc_type': request.json['doc_type'],
        'doc_number': request.json['doc_number'],
        'name': request.json['name'],
        'last_name': request.json['last_name'],
        'email': request.json['email'],
        'phone_number': request.json['phone_number']
    }
    clients.append(client)
    with open('clients.json', 'w') as fw:
        json.dump(clients, fw)
    with open('d1.json', 'w') as fw:
        json.dump(clients, fw)
    return jsonify(client), 201


@app.route('/foundbydoc', methods=['GET'])
def foundbydoc():
    doc_type = request.args.get("doc_type")
    doc_number = request.args.get('doc_number')
    try:
        clientfilter = [client for client in clients if client['doc_type'] == doc_type and client['doc_number'] == doc_number]
        return jsonify(clientfilter)
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True)