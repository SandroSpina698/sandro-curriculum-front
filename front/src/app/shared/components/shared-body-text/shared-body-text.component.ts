import {Component, Input} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-shared-body-text',
  standalone: true,
  imports: [
    TranslatePipe,
    NgIf
  ],
  templateUrl: './shared-body-text.component.html',
  styleUrl: './shared-body-text.component.scss'
})
export class SharedBodyTextComponent {
  private _bulletList: string[] = [];
  hasText: boolean = true;
  hasBulletList: boolean = false;

  @Input() textKey: string = '';
  @Input() set bulletList(newBulletList: string[]) {
    this._bulletList = newBulletList;
    if (newBulletList.length > 0) {
      this.textKey = '';
      this.hasText = false;
      this.hasBulletList = true;
    }
  };

  get bulletList(): string[] {
    return this._bulletList;
  }
}
