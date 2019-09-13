import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';

import { PostsService } from './services/posts.service';

import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes : Routes =[
  {path: '', component:PostListComponent},
  {path: 'posts', component:PostListComponent},
  {path: 'newPost', component:NewPostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    //NgbModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
