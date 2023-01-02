from database import Base,engine
from models import Attendance

print("creating database....")

Base.metadata.create_all(engine)
