from flask import Flask, render_template, request, url_for, redirect
import os
import jinja2
from form import testForm, mailForm
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired


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
@app.route('/home', methods=['GET'])
def home():
	homemailform = mailForm()
	return render_template('home.html', title = 'home', homemailform = homemailform)
    
@app.route('/mailconfirm', methods=['GET','POST'])
## https://www.youtube.com/watch?v=vF9n248M1yk
def mailconfirm():
	email = request.form ['email']
	token = serialz.dumps(email, salt='email-confirm')	
	link = url_for('mailconfirm', token=token, _external=True)
	msg = Message("Confirm your mail", sender=sendermail, recipients=[email])
	msg.body = 'Click on this link to start using bpp-web : {}'.format(link)
	mail.send(msg) 
	return '<p> GO TO YOUR MAIL AND DO AS WE COMMAND YOU ;)\
		 **check also spam**!!! <br> input mail is : {}\
		 <br>token : {}</p>'.format(email, token)

@app.route("/mailconfirmEnd/<token>")
def mailconfirmEnd(token):
	try:
		outm = serialz.loads(token, salt="email-confirm", max_age=3600)
		#return f'<h1>yeah, {token}, mail : {outm}</h1>'
		return redirect(url_for('query'))  #TODO tomorrow check if redirect is ok
	except SignatureExpired:
		return f'<h2> The token {token} is expired {outm}</h2>'
		
	

@app.route('/query', methods=['GET', 'POST'])
def query():
	form1 = testForm()
	return render_template('query.html', title = 'query', form=form1)
    
@app.route('/results')
def results():
	return render_template('results.html', title = 'results')
    
    
if __name__ == '__main__':
	app.run(debug=True)
