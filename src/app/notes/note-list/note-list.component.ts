import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  constructor(public notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.loadNotes();
  }

  identity(index, item) {
    return item.id;
  }
}
