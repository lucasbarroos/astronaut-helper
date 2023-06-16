import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent {
    options: AnimationOptions = {
      path: '/assets/animation.json',
    };

    animationCreated(animationItem: AnimationItem): void {
      console.log(animationItem);
    }

}
