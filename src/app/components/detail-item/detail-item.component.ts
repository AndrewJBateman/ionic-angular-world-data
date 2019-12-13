import { Component, OnInit, Input } from '@angular/core';
import { CountryDetailInterface } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss'],
})
export class DetailItemComponent implements OnInit {
  @Input() country: CountryDetailInterface;
  @Input() countryName: string;

  constructor() { }

  ngOnInit(
  ) {}

  appendComa(content: any) {
    try {
      let result = content.concat(',');
      return result;
    } catch (err){
      console.log(err);
    }
  }
}
