import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homepageActionButtonClicked() {
    const el = document.getElementById('leadSection');
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  handleSubmitClicked($event: any) {
    console.log('HandleSubmitClicked', $event);
  }
}
