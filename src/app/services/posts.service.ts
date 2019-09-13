import { Injectable } from '@angular/core';
import { Post } from "../Models/posts";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  postsSubject = new Subject<any[]>();

  POSTS: Post[] = [
      { title: 'Mon premier post', content: 'bla bla bla', loveIts: 0, created_at: new Date },
      { title: 'Mon deuxième post', content: 'bla bla bla', loveIts: 0, created_at: new Date },
      { title: 'Encore un post', content: 'bla bla bla', loveIts: 0, created_at: new Date }
    ]
    
  emitPostSubject() {
      this.postsSubject.next(this.POSTS.slice());
    }

  addPost(title: string, content: string){
      let newPost = new Post();
      newPost.content = content;
      newPost.title = title;
      newPost.created_at = new Date;
      newPost.loveIts=0;
      this.POSTS.push(newPost);
      this.emitPostSubject();
  }

  deletePost(i: number){
      this.POSTS.splice(i, 1);
      this.emitPostSubject();
  }

  onLoveIt(loveIts: number){ 
      return loveIts+1;
    }
    
  onDontLoveIt(loveIts: number){
    return loveIts-1;
  }
  
}
