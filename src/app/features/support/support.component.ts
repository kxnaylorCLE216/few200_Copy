import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupportModel } from './models';
import { selectReportLoaded, selectReportModel, SupportState } from './reducers';
import * as actions from './actions/support.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  loaded$!: Observable<boolean>;

  model$!: Observable<SupportModel>;
  constructor(private store: Store<SupportState>) {
    store.dispatch(actions.loadSupportReport());

  }

  ngOnInit(): void {
    this.loaded$ = this.store.select(selectReportLoaded);
    this.model$ = this.store.select(selectReportModel);
  }

}
