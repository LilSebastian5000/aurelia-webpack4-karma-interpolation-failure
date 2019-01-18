import {inject} from 'aurelia-framework';
import {AppLocalization} from './localizations/app-localization';

@inject(AppLocalization)
export class App {
  constructor(appLocalization) {
    this.appLocalization = appLocalization;
  }

  activate() {
    console.log(this.appLocalization.HELLO_WORLD);
  }
}
