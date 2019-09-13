import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    const content = form.value['content'];
    const title = form.value['title'];
    this.postsService.addPost(title, content);
    this.router.navigate(['/posts']);
  }

}
