from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy


class BaseModel(db.Model):
    """Base data model for all objects"""
    __abstract__ = True


class YourModel(db.Model):
    """model for one of your table"""
    __tablename__ = 'my_table'
