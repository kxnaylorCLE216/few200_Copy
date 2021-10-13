import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCounterGoal, selectCountToGoal } from 'src/app/reducers';
import * as actions from '../../actions/settings.actions';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  goal$!: Observable<number>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.goal$ = this.store.select(selectCounterGoal);
  }

  goalChanged(goalElement: HTMLInputElement) {

    const newGoal = goalElement.valueAsNumber;
    this.store.dispatch(actions.countGoalChanged({ payload: newGoal }));
    goalElement.value = '';
    goalElement.focus();
  }
}
