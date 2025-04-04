import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang: BehaviorSubject<string> = new BehaviorSubject('fr');
  initialLang: string = 'fr';

  constructor() {  }

  changeLang(newLang: string) {
    this.currentLang.next(newLang);
  }

  buildTranslationKeys(prefix: string, numberOfBulletPoints: number): string[] {
    return Array.from({ length: numberOfBulletPoints }, (_, i) => `${prefix}.${i + 1}`);
  }
}
