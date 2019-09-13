import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  POSTS : any[];
  postSubscription : Subscription;

  constructor(private postsService : PostsService){
  }
  
  ngOnInit(){
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (POSTS: any[]) => {
        this.POSTS = POSTS; 
      }
    );
   this.postsService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
