import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  @Input()
  title = 'Help Me';
  
  @Output()
  handleClick: EventEmitter<void> = new EventEmitter();

  actionButtonClicked() {
    this.handleClick.emit();
  }
}
