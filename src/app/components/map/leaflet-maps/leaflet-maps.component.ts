import { Component,OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkLeafletMapComponent } from '../../../@spk/spk-leaflet-map/spk-leaflet-map.component';
@Component({
  selector: 'app-leaflet-maps',
  standalone: true,
  imports: [SharedModule,SpkLeafletMapComponent],
  templateUrl: './leaflet-maps.component.html',
  styleUrl: './leaflet-maps.component.scss'
})

export class LeafletMapsComponent  {
}