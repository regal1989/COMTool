import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
