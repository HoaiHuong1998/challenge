from datetime import datetime
from enum import Enum

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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


class Attendance(BaseModel):
    status: Status


@app.post("/attendance")
async def create_attendance(attendance: Attendance):
    return {
        "status": attendance.status,
        "attendance_time": datetime.utcnow()
    }


@app.get("/attendance")
async def get_attendance():
    return [
        {
            "status": "begin",
            "attendance_time": datetime.utcnow()
        },
        {
            "status": "finish",
            "attendance_time": datetime.utcnow()
        },
        {
            "status": "begin",
            "attendance_time": datetime.utcnow()
        },
        {
            "status": "finish",
            "attendance_time": datetime.utcnow()
        },
        {
            "status": "begin",
            "attendance_time": datetime.utcnow()
        },
        {
            "status": "finish",
            "attendance_time": datetime.utcnow()
        }
    ]

