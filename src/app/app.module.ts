import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { reducers } from './reducers';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SsnMaskPipe } from './pipes/ssn.pipe';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './effects/settings.effects';
import { AppEffects } from './effects/app.effects';
import { SupportModule } from './features/support/support.module';
import { PlaylistsModule } from './features/playlists/playlists.module';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavbarComponent,
    HomeComponent,
    StatusBarComponent,
    UserSettingsComponent,
    SsnMaskPipe
  ],
  imports: [
    BrowserModule,
    PlaylistsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([SettingsEffects, AppEffects]),
    SupportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
