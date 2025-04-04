import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LanguageService} from "../../../core/language/language.service";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-shared-lang-selector',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './shared-lang-selector.component.html',
  styleUrl: './shared-lang-selector.component.scss'
})
export class SharedLangSelectorComponent implements OnInit, OnDestroy {
  private $subscriptions: Subscription[] = [];
  private _currentLang: string = '';

  constructor(private langService: LanguageService) {
    this._currentLang = this.langService.initialLang;
  }

  get currentLang(): string {
    return this._currentLang;
  }

  changeLang(lang: string) {
    console.info('changing the language to', lang);
    this.langService.changeLang(lang);
    this._currentLang = lang;
  }

  ngOnInit(): void {
    this.$subscriptions.push(
      this.langService.currentLang.subscribe(lang => this._currentLang = lang)
    )
  }

  ngOnDestroy(): void {
    for (let subscription of this.$subscriptions) {
      subscription.unsubscribe();
    }
  }
}
