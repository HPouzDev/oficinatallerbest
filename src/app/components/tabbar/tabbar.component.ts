import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css'],
  standalone: true,
  imports: [NgbNavModule],
})
export class TabbarComponent implements OnInit {
  active = 1;
  constructor() {}

  ngOnInit() {}
}
