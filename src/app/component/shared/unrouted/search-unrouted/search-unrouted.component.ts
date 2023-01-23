import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-search-unrouted',
  templateUrl: './search-unrouted.component.html',
  styleUrls: ['./search-unrouted.component.css']
})

export class SearchUnroutedComponent implements OnInit {

  @Input() strFilter: string = "";
  @Input() strTitlePlural: string = "";
  @Output() eeFilter = new EventEmitter<string>();

  subjectFilter = new Subject();

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.subjectFilter.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.eeFilter.emit(this.strFilter);
    });
  }

  onKeyUpFilter(_event: KeyboardEvent): void {
    this.subjectFilter.next();
  }

}
