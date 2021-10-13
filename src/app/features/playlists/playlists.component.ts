import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSongs } from './actions/song.actions';
import { PlaylistsState } from './reducers';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(private store: Store<PlaylistsState>) {
    store.dispatch(loadSongs());
  }

  ngOnInit(): void {
  }

}
