import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {SharedButtonsComponent} from "../../shared/shared-buttons/shared-buttons.component";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    SharedButtonsComponent,
    TranslatePipe
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    console.log(this.translateService.currentLang);
  }
}
