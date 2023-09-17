from fastapi import APIRouter, Depends, HTTPException

router = APIRouter(
    prefix="/auth",
    tags=["items"],
    responses={404: {"description": "Not found"}},
)


@router.post("/login")
async def login(username: str, password: str):
    return {"message": "login check"}