import {Component, OnInit} from '@angular/core';
import {SharedBodyTextComponent} from "../../../shared/components/shared-body-text/shared-body-text.component";
import {SharedSubTitleComponent} from "../../../shared/components/shared-sub-title/shared-sub-title.component";
import {SkillsDisplayComponent} from "./skills-display/skills-display.component";
import {AppImages} from "../../../models/interfaces/AppImages";
import {SharedButtonsComponent} from "../../../shared/shared-buttons/shared-buttons.component";
import {ButtonTypeEnum} from "../../../shared/enums/ButtonTypeEnum";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-left-part',
  standalone: true,
  imports: [
    SharedBodyTextComponent,
    SharedSubTitleComponent,
    SkillsDisplayComponent,
    SharedButtonsComponent,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './left-part.component.html',
  styleUrl: './left-part.component.scss'
})
export class LeftPartComponent implements OnInit {
  readonly availableSkillsIcons: string[] = ['angular', 'react', 'java', 'spring', 'dot-net', 'postgresql', 'python', 'mongodb'];
  readonly projects: string[] = ['jamify', 'cv-angular', 'gymrats', 'others'];

  skills: AppImages[] = []

  ngOnInit() {
    this.skills = this.availableSkillsIcons.map(availableSkillIcon => {
      return {
        src: `assets/logos/${availableSkillIcon}-icon.svg`,
        altText: `${availableSkillIcon} logo icon`,
        name: availableSkillIcon
      }
    })
  }

  openCambridge(): void {
    window.open('assets/certificates/StatementOfResult.pdf', '_blank');
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}
