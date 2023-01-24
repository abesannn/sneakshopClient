import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-unrouted',
  templateUrl: './search-unrouted.component.html',
  styleUrls: ['./search-unrouted.component.css']
})
export class SearchUnroutedComponent {

  @Input() termino: string = "";
  @Input() placeHolder: string = "";
  @Output() onSearch = new EventEmitter<string>();


  constructor( ) { }

  buscar(): void {
    setTimeout( () =>{
      this.onSearch.emit(this.termino);
    }, 1000)
  }
}
