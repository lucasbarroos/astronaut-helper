import { Component, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(commentsService: CommentsService) { }

  ngOnInit() {

  }

  homepageActionButtonClicked() {
    const el = document.getElementById('leadSection');
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  handleSubmitClicked($event: { name: string, email: string }) {
    console.log('HandleSubmitClicked', $event);
  }
}
