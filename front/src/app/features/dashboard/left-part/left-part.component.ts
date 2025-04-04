import {Component, OnInit} from '@angular/core';
import {SharedBodyTextComponent} from "../../../shared/components/shared-body-text/shared-body-text.component";
import {SharedSubTitleComponent} from "../../../shared/components/shared-sub-title/shared-sub-title.component";
import {SkillsDisplayComponent} from "./skills-display/skills-display.component";
import {AppImages} from "../../../models/interfaces/AppImages";

@Component({
  selector: 'app-left-part',
  standalone: true,
  imports: [
    SharedBodyTextComponent,
    SharedSubTitleComponent,
    SkillsDisplayComponent
  ],
  templateUrl: './left-part.component.html',
  styleUrl: './left-part.component.scss'
})
export class LeftPartComponent implements OnInit {
  readonly availableSkillsIcons: string[] = ['angular', 'react', 'java', 'spring', 'dot-net', 'postgresql', 'python', 'mongodb'];

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
}
