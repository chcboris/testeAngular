import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp15',
  templateUrl: './comp15.component.html',
  styleUrls: ['./comp15.component.css']
})
export class Comp15Component {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}