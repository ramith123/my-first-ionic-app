import { Component, NgModule } from '@angular/core';
import { ThemeTestService } from '../theme-test.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selected = false;
  constructor(private themeChanger: ThemeTestService, storage: Storage) {
    storage.get("theme").then(theme => {
      if (theme == "dark") this.selected = true;
    })
  }



  darkMode() {
    this.themeChanger.setTheme("dark");
    this.selected = true;

  }

  lightMode() {
    this.themeChanger.setTheme("light");
    this.selected = false;

  }
  slide() {

    if (this.selected) this.darkMode();
    else this.lightMode();
  }

}
