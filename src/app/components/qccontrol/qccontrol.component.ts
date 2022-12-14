import { Component, OnInit } from '@angular/core';
import { QCControlCardComponent } from '../qccontrol-card/qccontrol-card.component';

@Component({
  selector: 'app-qccontrol',
  templateUrl: './qccontrol.component.html',
  styleUrls: ['./qccontrol.component.css'],
  standalone: true,
  imports: [QCControlCardComponent],
})
export class QCControlComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
