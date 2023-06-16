import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  @Input()
  path = '/assets/animation.json';

  @Input()
  styles: Partial<CSSStyleDeclaration> = {};

  options: AnimationOptions = {};

  ngOnInit() {
    this.options = {
      path: this.path,
    };
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
