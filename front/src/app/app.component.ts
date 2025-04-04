import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {LanguageService} from "./core/language/language.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sandro SPINA - CV';
  private $subscriptions: Subscription[] = [];

  constructor(private translateService: TranslateService, private langService: LanguageService) {
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setDefaultLang('fr');
  }

  ngOnInit() {
    this.$subscriptions.push(
      this.langService.currentLang.subscribe(lang => lang ? this.translateService.use(lang) : this.translateService.use('fr')
      )
    );
  }

  ngOnDestroy() {
    for (let subscription of this.$subscriptions) {
      subscription.unsubscribe();
    }
  }
}
