import { Component } from '@angular/core';
import {LeftPartComponent} from "./left-part/left-part.component";
import {RightPartComponent} from "./right-part/right-part.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LeftPartComponent,
    RightPartComponent,
    HeaderComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
