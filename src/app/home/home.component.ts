import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.template.html'
})

export class Home {
  news: Array<Boolean> = [false, false, false];

  showNewsAllItem(index) {
    this.news[index] = true;
  }
}
