import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  rol: string = ('')
  userId:number=0

  constructor (){}

  ngOnInit():void{
    this.rol=localStorage.getItem('rol')?? ""

  }

}
