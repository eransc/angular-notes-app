import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteModalComponent } from 'src/app/modals/note-modal/note-modal.component';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note;
  constructor(public dialog: MatDialog, private notesService: NotesService) {}

  ngOnInit(): void {}

  openNoteDialog(): void {
    const dialogRef = this.dialog.open(NoteModalComponent, {
      width: '300px',
      data: this.note,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // update note
      if (result){
        this.notesService.updateNote(this.note.id, result as Note);
      }
      
    });
  }

  deleteNote(id: string){
    this.notesService.deleteNote(id);
  }

}
