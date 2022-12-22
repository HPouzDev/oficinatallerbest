import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private router: Router) {}

  ngOnInit() {}

  goQc(): any {
    this.router.navigate(['qccontrol']);
  }

  goSc(): any {
    this.router.navigate(['sccontrol']);
  }
}
