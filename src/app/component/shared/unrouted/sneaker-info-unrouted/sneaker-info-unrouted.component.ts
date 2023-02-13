import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sneaker-info-unrouted',
  templateUrl: './sneaker-info-unrouted.component.html',
  styleUrls: ['./sneaker-info-unrouted.component.css']
})
export class SneakerInfoUnroutedComponent {

  @Input() id: number = 0;
}
