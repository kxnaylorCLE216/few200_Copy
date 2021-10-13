import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupportModel } from './models';
import { SupportState } from './reducers';
import * as actions from './actions/support.actions';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {


  model: SupportModel = {
    supportContact: {
      name: 'Sue',
      emailAddress: 'sue@aol.com',
      phone: '555-1212'
    },
    supportPhone: null,
    status: 'Groovy',
    currentlyOpen: false
  }
  constructor(private store: Store<SupportState>) {
    store.dispatch(actions.loadSupportReport());

  }

  ngOnInit(): void {
  }

}
