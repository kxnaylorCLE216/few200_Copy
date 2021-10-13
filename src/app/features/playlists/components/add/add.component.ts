import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { songAdded } from '../../actions/song.actions';
import { PlaylistsState } from '../../reducers';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form = this.formBuilder.group({
    title: ['', [Validators.required]],
    artist: ['', [Validators.required, Validators.maxLength(100)]],
    album: ['', []]
  })
  constructor(private formBuilder: FormBuilder, private store: Store<PlaylistsState>) { }

  get title() { return this.form.get('title'); }
  get artist() { return this.form.get('artist'); }
  get album() { return this.form.get('album'); }
  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log('Dispatch an action, yo!');
      this.store.dispatch(songAdded({ payload: this.form.value }));
      this.form.reset();
    } else {
      console.log('There are errors!');
    }
  }

}
