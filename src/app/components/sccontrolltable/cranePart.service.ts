/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
  of,
  Subject,
  debounceTime,
  delay,
  switchMap,
  tap,
} from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { SortColumn, SortDirection } from './sortable.directive';
import { CranePart } from './cranePart';
import { CRANEPARTS } from './craneParts';

interface SearchResult {
  craneParts: CranePart[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(
  craneParts: CranePart[],
  column: SortColumn,
  direction: string
): CranePart[] {
  if (direction === '' || column === '') {
    return craneParts;
  } else {
    return [...craneParts].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(craneParts: CranePart, term: string, pipe: PipeTransform) {
  return (
    craneParts.name.toLowerCase().includes(term.toLowerCase()) ||
    craneParts.scname.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(craneParts.type).includes(term) ||
    pipe.transform(craneParts.hour).includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class CranePartService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _craneParts$ = new BehaviorSubject<CranePart[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._craneParts$.next(result.craneParts);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get craneParts$() {
    return this._craneParts$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._state;

    // 1. sort
    let craneParts = sort(CRANEPARTS, sortColumn, sortDirection);

    // 2. filter
    craneParts = craneParts.filter((cranePart) =>
      matches(cranePart, searchTerm, this.pipe)
    );
    const total = craneParts.length;

    // 3. paginate
    craneParts = craneParts.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ craneParts, total });
  }
}
