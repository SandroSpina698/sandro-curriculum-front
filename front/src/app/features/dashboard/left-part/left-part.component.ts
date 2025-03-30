import { Component } from '@angular/core';
import {SharedBodyTextComponent} from "../../../shared/components/shared-body-text/shared-body-text.component";

@Component({
  selector: 'app-left-part',
  standalone: true,
  imports: [
    SharedBodyTextComponent
  ],
  templateUrl: './left-part.component.html',
  styleUrl: './left-part.component.scss'
})
export class LeftPartComponent {

}
