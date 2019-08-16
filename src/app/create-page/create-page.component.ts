import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePageComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
