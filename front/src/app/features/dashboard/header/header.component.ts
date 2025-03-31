import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _currentLang: string = '';

  constructor(private translateService: TranslateService) {
    this._currentLang = this.translateService.currentLang;
  }

  get currentLang(): string {
    return this._currentLang;
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
    this._currentLang = lang;
  }
}
