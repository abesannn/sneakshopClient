import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-pagination-unrouted',
  templateUrl: './pagination-unrouted.component.html',
  styleUrls: ['./pagination-unrouted.component.css']
})

export class PaginationUnroutedComponent implements OnInit {

  @Input()
  set nPage(value: number) {
    this._nPage = value;
    this.aPaginationBar = this.oPaginationService.pagination(this._nTotalPages, this._nPage);
  }
  get nPage(): number {
    return this._nPage;
  }

  @Input()
  set nTotalPages(value: number) {
    this._nTotalPages = value;
    this.aPaginationBar = this.oPaginationService.pagination(this._nTotalPages, this._nPage);
  }
  get nTotalPages(): number {
    return this._nTotalPages;
  }

  @Output() eePage = new EventEmitter<number>();

  _nPage: number;
  _nTotalPages: number;
  aPaginationBar: string[];

  constructor(
    private oPaginationService: PaginationService
  ) { }

  ngOnInit() { }

  doJumpToPage() {
    this.eePage.emit(this._nPage);
    return false;
  }

}
