import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SongEffects } from './effects/song.effects';



const routes: Routes = [
  {
    path: 'playlists',
    component: PlaylistsComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    PlaylistsComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    HttpClientModule,
    EffectsModule.forFeature([SongEffects])
  ],
  exports: [PlaylistsComponent]
})
export class PlaylistsModule { }
