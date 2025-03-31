import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sandro SPINA - CV';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setDefaultLang('fr');
    this.translateService.use('fr');
  }
}
