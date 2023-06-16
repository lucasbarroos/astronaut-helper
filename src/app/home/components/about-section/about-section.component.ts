import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  animationStyles: Partial<CSSStyleDeclaration> = {
    maxWidth: '20vw',
    margin: '0 auto',
  };
}
