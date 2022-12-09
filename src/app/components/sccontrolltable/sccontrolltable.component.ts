import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CranePart } from './cranePart';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { CranepartService } from './cranepart.service';

@Component({
  selector: 'app-sccontrolltable',
  templateUrl: './sccontrolltable.component.html',
  styleUrls: ['./sccontrolltable.component.css'],
  standalone: true,
  imports: [
    NgFor,
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbTypeaheadModule,
    NgbdSortableHeader,
    NgbPaginationModule,
    NgIf,
  ],
  providers: [CranepartService, DecimalPipe],
})
export class SccontrolltableComponent {
  countries$: Observable<CranePart[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CranepartService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
