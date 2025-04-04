import {Component, OnInit} from '@angular/core';
import {SharedBodyTextComponent} from "../../../shared/components/shared-body-text/shared-body-text.component";
import {SharedSubTitleComponent} from "../../../shared/components/shared-sub-title/shared-sub-title.component";
import {LanguageService} from "../../../core/language/language.service";

@Component({
  selector: 'app-right-part',
  standalone: true,
  imports: [
    SharedBodyTextComponent,
    SharedSubTitleComponent
  ],
  templateUrl: './right-part.component.html',
  styleUrl: './right-part.component.scss'
})
export class RightPartComponent implements OnInit {
  readonly NSYSU_TASKS_NUMBER: number = 1;
  readonly WORK_STUDY_TASKS_NUMBER: number = 7;
  readonly INTERNSHIP_TASKS_NUMBER: number = 3;
  readonly CPE_TASKS_NUMBER: number = 2;

  nsysuBulletList: string[] = [];
  workStudyProgramBulletList: string[] = [];
  internshipBulletList: string[] = [];
  cpeBulletList: string[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.nsysuBulletList = [...this.languageService.buildTranslationKeys('right-part.experience.tasks.nsysu', this.NSYSU_TASKS_NUMBER)];
    this.workStudyProgramBulletList = [...this.languageService.buildTranslationKeys('right-part.experience.tasks.work-study-program', this.WORK_STUDY_TASKS_NUMBER)];
    this.internshipBulletList = [...this.languageService.buildTranslationKeys('right-part.experience.tasks.internship', this.INTERNSHIP_TASKS_NUMBER)];
    this.cpeBulletList = [...this.languageService.buildTranslationKeys('right-part.education.tasks.cpe', this.CPE_TASKS_NUMBER)];
  }
}
