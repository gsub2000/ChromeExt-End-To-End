# Library imports
from flask import Flask, send_file, request
from flask_cors import CORS, cross_origin
import json


# Creating Python Flask object (creates the server)
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = "Content-Type"

# Root function
@app.route('/')
def root():
	return json.dumps("home page")
	
# Example function
@app.route('/example', methods=["POST"])
def reverseInput():
	words = request.get_json(force=True)['msg']
	return json.dumps(words[::-1])
	
# Running/Starting the server
if __name__ ==  '__main__':
  app.run()