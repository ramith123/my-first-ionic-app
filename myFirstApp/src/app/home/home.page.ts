import { Component } from '@angular/core';
import { ThemeTestService } from '../theme-test.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private themeChanger: ThemeTestService,


  ) { }


  darkMode() {
    this.themeChanger.setTheme("dark");

  }

  lightMode() {
    this.themeChanger.setTheme("light");

  }

}
