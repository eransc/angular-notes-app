import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { NoteListComponent } from './notes/note-list/note-list.component';

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent,
    canActivate: [AuthService]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
