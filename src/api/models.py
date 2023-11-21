from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password = db.Column(db.String(256), unique=False, nullable=False)
    profile_pic = db.Column(db.String(256), default="")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username" : self.username,
            "profile_pic" : self.profile_pic,
            "park_reviews" : [review.serialize() for review in self.park_reviews],
            "coaster_reviews" : [review.serialize() for review in self.coaster_reviews]
            # do not serialize the password, its a security breach
        }
    
    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self._password, password)