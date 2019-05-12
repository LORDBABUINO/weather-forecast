import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../search-result.service'
import { Weather } from '../models/weather.model'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.css'],
	providers: [SearchResultService]
})
export class SearchResultComponent implements OnInit {

	items

	constructor(
		private searchResultService: SearchResultService
	) { }

  ngOnInit() {
		this.searchResultService.getSearch('petrolina')
			.subscribe((response: any) => {
				this.items = response.list.map((weather) => new Weather(weather))
			})
  }

}
