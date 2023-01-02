from datetime import datetime
from enum import Enum

from fastapi import FastAPI, status
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import models
from database import SessionLocal
from typing import Optional, List

# models.Base.metadata.create_all(bind=engine)

# def get_db():
#     try:
#         db = SessionLocal()
#         yield db
#     finally:
#         db.close()


app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Status(str, Enum):
    begin = "begin"
    finish = "finish"


class Time(datetime):
    time = datetime.utcnow()


class Attendance_Response(BaseModel):
    status: Status
    attendance_time: Time

    class Config:
        orm_mode = True

class Attendance_Request(BaseModel):
    status: Status

    class Config:
        orm_mode = True



db = SessionLocal()


@app.get('/attendance', response_model=List[Attendance_Response], status_code=200)
def get_all_attendances():
    attendance = db.query(models.Attendance).order_by(models.Attendance.attendance_time.desc()).limit(6).all()
    return attendance


@app.post('/attendance', response_model=Attendance_Response, status_code=status.HTTP_201_CREATED)
def create_an_attendance(attendance: Attendance_Request):
    new_attendance = models.Attendance(
        status=attendance.status,
        attendance_time=datetime.utcnow()
    )

    db.add(new_attendance)
    db.commit()

    return new_attendance
