from flask_wtf import FlaskForm, Form
from wtforms import StringField, SubmitField, FieldList
from wtforms.validators import DataRequired

class testForm(FlaskForm):
	field1 = StringField('Field1', validators=[DataRequired()])
	submit = SubmitField('Submit')
	
class mailForm(FlaskForm):
	email = StringField('email', validators=[DataRequired()]) #pending Email validator
	submit = SubmitField('Submit')

class twoField(Form):
	string1 = StringField('string1')
	string2 = StringField('string2')
	submit = SubmitField("Submit")
