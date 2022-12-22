import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { QCControlCardComponent } from '../qccontrol-card/qccontrol-card.component';

@Component({
  selector: 'app-qccontrol',
  templateUrl: './qccontrol.component.html',
  styleUrls: ['./qccontrol.component.css'],
  standalone: true,
  imports: [QCControlCardComponent, NavbarComponent],
})
export class QCControlComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
