import { Component, Input } from '@angular/core';
import { Ocean } from 'src/app/interfaces/ocean';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-ocean-item',
  templateUrl: './ocean-item.component.html',
  styleUrls: ['./ocean-item.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class OceanItemComponent {
  @Input() ocean: Ocean;

}
