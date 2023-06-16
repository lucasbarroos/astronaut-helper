import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lead-section',
  templateUrl: './lead-section.component.html',
  styleUrls: ['./lead-section.component.scss']
})
export class LeadSectionComponent implements OnInit {

  @Output()
  handleSubmitClicked: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  
  }

  handleSubmit() {
    this.handleSubmitClicked.emit({});
  }

}
