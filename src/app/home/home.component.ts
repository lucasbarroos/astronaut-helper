import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homepageActionButtonClicked() {
    alert('Homepage action button clicked!');
  }

  handleSubmitClicked($event: any) {
    console.log('HandleSubmitClicked', $event);
  }
}
