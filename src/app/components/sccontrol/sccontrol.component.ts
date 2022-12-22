import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SccontrolltableComponent } from '../sccontrolltable/sccontrolltable.component';

@Component({
  selector: 'app-sccontrol',
  templateUrl: './sccontrol.component.html',
  styleUrls: ['./sccontrol.component.css'],
  standalone: true,
  imports: [SccontrolltableComponent, NavbarComponent],
})
export class SCcontrolComponent {
  constructor() {}
}
