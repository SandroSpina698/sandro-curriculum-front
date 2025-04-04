import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../../core/language/language.service";
import {Subscription} from "rxjs";
import {RouterLink} from "@angular/router";
import {
  SharedLangSelectorComponent
} from "../../../shared/components/shared-lang-selector/shared-lang-selector.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterLink,
    SharedLangSelectorComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor() {}
}
