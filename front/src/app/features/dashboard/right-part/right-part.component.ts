import { Component } from '@angular/core';
import {SharedBodyTextComponent} from "../../../shared/components/shared-body-text/shared-body-text.component";

@Component({
  selector: 'app-right-part',
  standalone: true,
    imports: [
        SharedBodyTextComponent
    ],
  templateUrl: './right-part.component.html',
  styleUrl: './right-part.component.scss'
})
export class RightPartComponent {

}
