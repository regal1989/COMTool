import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.css']
})
export class ManagePageComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
