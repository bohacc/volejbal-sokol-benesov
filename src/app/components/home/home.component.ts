import { Component } from '@angular/core';

enum SeasonsEnum {
  SEASON2016_2017 = 20162017,
  SEASON2017_2018 = 20172018
}

@Component({
  selector: 'home',
  templateUrl: 'home.template.html'
})

export class Home {
  news: Array<Boolean> = [false, false, false];
  season2016_2017: boolean = false;
  season2017_2018: boolean = false;
  seasonsEnum = SeasonsEnum;

  showNewsAllItem(index) {
    this.news[index] = true;
  }

  toggleSeason(season: number) {
    switch (season) {
      case this.seasonsEnum.SEASON2016_2017:
        this.season2016_2017 = !this.season2016_2017;
        break;
      case this.seasonsEnum.SEASON2017_2018:
        this.season2017_2018 = !this.season2017_2018;
        break;
    }
  }
}
