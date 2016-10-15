from flask import Flask, request, Response
import json
app = Flask(__name__)


@app.route('/')
def start():
	return "working"


@app.route('/q/<text>')
def query(text):
	print text
	query_string = request.query_string
	print query_string
	data = {'result'  : 'pos/neg' }
        js = json.dumps(data)
        resp = Response(js, status=200, mimetype='application/json')
    
        return resp
	#return str(text)

if __name__ == '__main__':
    app.run(debug=True)