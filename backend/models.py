from database import Base
from sqlalchemy import String, DateTime, Column

class Attendance(Base):
    __tablename__ = 'attendance_histories'
    status = Column(String(50), nullable=False)
    attendance_time = Column(DateTime, primary_key=True, nullable=False)

    def __repr__(self):
        return f"<Attendance status:{self.status} attendance_time:{self.attendance_time}>"