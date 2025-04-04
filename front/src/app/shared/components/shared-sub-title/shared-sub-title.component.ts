import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-shared-sub-title',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './shared-sub-title.component.html',
  styleUrl: './shared-sub-title.component.scss'
})
export class SharedSubTitleComponent {
  @Input() textKey: string = '';
  @Input() link?: string;
  @Input() level: number = 1;
}
