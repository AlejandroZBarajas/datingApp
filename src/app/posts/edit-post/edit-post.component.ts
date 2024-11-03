import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../post';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('post_id'));
    this.postsService.getPostById(postId).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (err) => {
        console.error("Error fetching post: ", err);
      }
    });
  }
}
