import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../home/home-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public searchValue: string;
  public listHouse: any;
  public check: boolean = false;
  private status = {
    status: "home/search",
    searchValue: "",
  }

  constructor(private activevatedRoute: ActivatedRoute,
    private homeService: HomeServiceService
  ) { }

  ngOnInit() {
    this.activevatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('searchValue')) {
        return;
      }
      this.status.searchValue = paramMap.get('searchValue');
    });
    this.listHouse = this.homeService.findHouses(this.status.searchValue);
    if (this.listHouse.length > 0) {
      this.check = true;
    }
  }

}
