import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteModalComponent } from '../../modals/note-modal/note-modal.component';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-post-note',
  templateUrl: './post-note.component.html',
  styleUrls: ['./post-note.component.scss'],
})
export class PostNoteComponent implements OnInit {
  email;

  constructor(public dialog: MatDialog, private notesService: NotesService) {}

  ngOnInit(): void {}

  openNoteDialog(): void {
    const dialogRef = this.dialog.open(NoteModalComponent, {
      width: '300px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result){
        this.notesService.addNote(result);
      }
      
    });
  }
}
