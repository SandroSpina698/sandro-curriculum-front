import {Component, Input} from '@angular/core';
import {AppImages} from "../../../../models/interfaces/AppImages";

@Component({
  selector: 'app-skills-display',
  standalone: true,
  imports: [

  ],
  templateUrl: './skills-display.component.html',
  styleUrl: './skills-display.component.scss'
})
export class SkillsDisplayComponent {
  @Input() imagesSrc?: AppImages[];
}
