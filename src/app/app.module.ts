import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './home/components/animation/animation.component';
import { ActionButtonComponent } from './home/components/action-button/action-button.component';
import { AboutSectionComponent } from './home/components/about-section/about-section.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimationComponent,
    ActionButtonComponent,
    AboutSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
