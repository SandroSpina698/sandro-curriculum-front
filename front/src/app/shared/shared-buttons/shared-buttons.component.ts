import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslatePipe} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {ButtonTypeEnum} from "../enums/ButtonTypeEnum";

@Component({
  selector: 'app-shared-buttons',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    NgClass
  ],
  templateUrl: './shared-buttons.component.html',
  styleUrl: './shared-buttons.component.scss'
})
export class SharedButtonsComponent {
  @Input() navigationLink?: string;
  @Input() textKey: string = 'Ok';
  @Input() type: ButtonTypeEnum = ButtonTypeEnum.NAVIGATION;

  @Output() onClickAction: EventEmitter<any> = new EventEmitter();


  handleClick() {
    this.onClickAction.emit();
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}
