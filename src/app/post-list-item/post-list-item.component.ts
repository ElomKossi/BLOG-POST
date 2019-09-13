import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: string;
  @Input() index: number;
  @Input() loveIts: number;
  
  constructor(private postsService : PostsService) { }

  ngOnInit() {
  }


  onLoveIt(){
    this.loveIts =this.postsService.onLoveIt(this.loveIts);
    console.log(this.loveIts)
  }
  
  onDontLoveIt(){
    this.loveIts =this.postsService.onDontLoveIt(this.loveIts);
    console.log(this.loveIts)
  }

  onRemovePost(){
    this.postsService.deletePost(this.index);
  }

}
