import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
// google chart map parameters
	title = '';
	type = 'Map';
	data = [
		['China', 'China: 1,363,800,000'],
		['India', 'India: 1,242,620,000'],
		['US', 'US: 317,842,000'],
		['Indonesia', 'Indonesia: 247,424,598'],
		['Brazil', 'Brazil: 201,032,714'],
		['Pakistan', 'Pakistan: 186,134,000'],
		['Nigeria', 'Nigeria: 173,615,000'],
		['Bangladesh', 'Bangladesh: 152,518,015'],
		['Russia', 'Russia: 146,019,512'],
		['Japan', 'Japan: 127,120,000']
	];
	columnNames = ['Country', 'Population'];
	options = {
		showTip: true
	};
	width = 550;
	height = 400;

	constructor() { }

	ngOnInit() {}

}
