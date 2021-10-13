import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SongListItemModel } from '../../models';
import { PlaylistsState, selectSongListItemModel } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  model$!: Observable<SongListItemModel[]>;

  constructor(private store: Store<PlaylistsState>) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectSongListItemModel);
  }

}
