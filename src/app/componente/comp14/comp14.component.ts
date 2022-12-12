import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp14',
  templateUrl: './comp14.component.html',
  styleUrls: ['./comp14.component.css']
})
export class Comp14Component implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
