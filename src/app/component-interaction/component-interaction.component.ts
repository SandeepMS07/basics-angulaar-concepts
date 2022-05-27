import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: ` <h2>{{ 'Hello ' + name }}</h2> 
      <button (click)="fireEvent()">Send Event</button>
  `,
  styles: [],
})
export class ComponentInteractionComponent implements OnInit {
  constructor() {}
  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {}
  fireEvent(){
    this.childEvent.emit('Hey Sandeep')
  }
}
