from flask import Flask, render_template
import os
import jinja2
from form import testForm


app = Flask(__name__)
app.config['SECRET_KEY'] = 'notsecrettestkey'


@app.route('/')
@app.route('/home')
def home():
	return render_template('home.html', title = 'home')
    
    
@app.route('/querry', methods=['GET', 'POST'])
def querry():
	form = testForm()
	return render_template('querry.html', title = 'querry', form=form)
    
@app.route('/results')
def results():
	return render_template('results.html', title = 'results')
    
    
if __name__ == '__main__':
	app.run(debug=True)
