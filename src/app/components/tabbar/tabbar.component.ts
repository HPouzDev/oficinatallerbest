import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Hola } from '../../../assets/img/cranePart/Hola';
import { QCControlComponent } from '../qccontrol/qccontrol.component';
import { SCcontrolComponent } from '../sccontrol/sccontrol.component';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css'],
  standalone: true,
  imports: [NgbNavModule, SCcontrolComponent, QCControlComponent],
})
export class TabbarComponent implements OnInit {
  active = 1;
  constructor() {}

  ngOnInit() {}
}
