import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp06',
  templateUrl: './comp06.component.html',
  styleUrls: ['./comp06.component.css']
})
export class Comp06Component implements OnInit {

  constructor() { }
  lst: object = [{ id: 1, letra: 'abc' }, { id: 2, letra: 'babc' }, { id: 3, letra: 'cbcd' }, { id: 4, letra: 'dcde' }];
  
  ngOnInit(): void {
  }

}
