from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class testForm(FlaskForm):
	field1 = StringField('Field1', validators=[DataRequired()])
	submit = SubmitField('Submit')
	
class mailForm(FlaskForm):
	email = StringField('email', validators=[DataRequired()]) #pending Email validator
	submit = SubmitField('Submit')

