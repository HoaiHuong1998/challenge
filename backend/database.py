from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:123456789@localhost/postgres"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, echo=True
)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)