from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class BlogPost(BaseModel):
    id: int
    title: str
    content: str

# In-memory blog storage
blog_posts = [
    BlogPost(id=1, title="Welcome to Veehul Finserve LLP Blog", content="This is your first post!")
]

@router.get("/", response_model=List[BlogPost])
def list_posts():
    return blog_posts

@router.get("/{post_id}", response_model=BlogPost)
def get_post(post_id: int):
    for post in blog_posts:
        if post.id == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")

@router.post("/", response_model=BlogPost)
def create_post(post: BlogPost):
    blog_posts.append(post)
    return post

@router.put("/{post_id}", response_model=BlogPost)
def update_post(post_id: int, updated: BlogPost):
    for i, post in enumerate(blog_posts):
        if post.id == post_id:
            blog_posts[i] = updated
            return updated
    raise HTTPException(status_code=404, detail="Post not found")

@router.delete("/{post_id}")
def delete_post(post_id: int):
    for i, post in enumerate(blog_posts):
        if post.id == post_id:
            del blog_posts[i]
            return {"ok": True}
    raise HTTPException(status_code=404, detail="Post not found") 