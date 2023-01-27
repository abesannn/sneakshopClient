import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tipousuario-finder',
  templateUrl: './tipousuario-finder.component.html',
  styleUrls: ['./tipousuario-finder.component.css']
})
export class TipousuarioFinderComponent {

  @Output() closeEvent = new EventEmitter<number>();

}
