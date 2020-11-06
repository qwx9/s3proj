from flask import Flask, render_template, request, url_for, redirect
import os
import jinja2
from form import *
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired
from output2json import *#the .py that does stuff with server files

app = Flask(__name__)
app.config['SECRET_KEY'] = 'notsecrettestkey'

#new for doing the mail confirmation step:
sendermail='deijoutp@yahoo.es'
app.config.update({
    #'MAIL_SENDER' : os.environ.get('MAIL_SENDER_EMAIL'),
	'DEBUG' : True,
    'MAIL_SERVER' : 'smtp.mail.yahoo.com',
    'MAIL_PORT' : '465', #587
    'MAIL_USE_SSL' : 'True',
    'MAIL_USERNAME' : sendermail,
    'MAIL_PASSWORD' : 'terxjzdfcrmlabdr'})       
mail = Mail(app)
serialz = URLSafeTimedSerializer(app.config['SECRET_KEY'])

@app.route('/')
@app.route('/home', methods=['GET','POST'])
def home():
	homemailform = mailForm()
	return render_template('home.html', title = 'home', homemailform = homemailform)

"""
@app.route('/mailconfirm', methods=['GET','POST'])  #
## https://www.youtube.com/watch?v=vF9n248M1yk
def mailconfirm():
	if request.method == 'POST':
		email = request.form ['email']
		token = serialz.dumps(email, salt='email-confirm')	
		link = url_for('mailconfirm', token=token, _external=True)
		msg = Message("Confirm your mail", sender=sendermail, recipients=[email])
		msg.body = 'Click on this link to start using bpp-web : {}'.format(link)
		mail.send(msg) 
		return '<p> GO TO YOUR MAIL AND DO AS WE COMMAND YOU ;)\
			 **check also spam**!!! <br> input mail is : {}\
		 	<br>token : {}</p>'.format(email, token)
	#elif request.method == 'GET': 
	token = request.url.split("token=")[1]	#redirect(url_for('mailconfirmEnd'))
	return redirect( url_for('mailconfirmEnd',token=token) )

@app.route('/mailconfirmEnd/<token>')
def mailconfirmEnd(token):
	try:
		userMail = serialz.loads(token, salt="email-confirm", max_age=9000)
		#return redirect(url_for('query', userMail=userMail))
		return "token ok, results will be sent to : {userMail}. Close this"
	except SignatureExpired:
		return f'<h2>The token {token} is EXPIRED </h2>'
"""		
@app.route('/query', methods=['GET', 'POST'])
def query():
	if request.method == 'GET':
		formtwofield=twoField()
		return render_template('query.html', title = 'query', form =formtwofield)
	elif request.method == 'POST':
		s1 = request.form['string1'] #example: "RESULTS"
		s2 = request.form['string2'] # "user001"
		data = dictionnary(s1,s2)
		datastr = str(dictio2json(data)) # the json data
		return redirect( url_for('results', data=datastr) )
		

@app.route('/results', methods = ['POST', 'GET'] )
def results(): 
	data= request.args['data']
	return render_template('results.html', title = 'results', data=data)
	if request.method == 'GET':
		return "in progress..."
		#

@app.route('/TEST')
def TEST():
	return render_template('TEST.html', title='TEST')
    
    
if __name__ == '__main__':
	app.run(debug=True)
