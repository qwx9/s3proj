from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class testForm(FlaskForm):
	field1 = StringField('Field1', validators=[DataRequired()])
	submit = SubmitField('Submit')
