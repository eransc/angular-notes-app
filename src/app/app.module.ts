import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteModalComponent } from './modals/note-modal/note-modal.component';
import { PostNoteComponent } from './notes/post-note/post-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoteCardComponent,
    NoteListComponent,
    NoteModalComponent,
    PostNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,

    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
