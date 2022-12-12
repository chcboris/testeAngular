import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp12',
  templateUrl: './comp12.component.html',
  styleUrls: ['./comp12.component.css']
})
export class Comp12Component implements OnInit {
  @Input() msg;
  
  constructor() { }

  ngOnInit(): void {
  }

}
