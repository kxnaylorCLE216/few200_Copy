import { Component, Input, OnInit } from '@angular/core';
import { SupportModel } from '../../models';

@Component({
  selector: 'app-status-display',
  templateUrl: './status-display.component.html',
  styleUrls: ['./status-display.component.css']
})
export class StatusDisplayComponent implements OnInit {

  @Input() model!: SupportModel | null;
  constructor() { }

  ngOnInit(): void {
  }

}
