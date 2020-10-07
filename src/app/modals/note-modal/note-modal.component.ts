import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/notes/note.model';
import { NotesService } from 'src/app/notes/notes.service';
import { notEqual } from 'assert';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss'],
})
export class NoteModalComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
    private notesService: NotesService,
    public dialogRef: MatDialogRef<NoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) {
    this.form = fb.group({
      author: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  isValid(control) {
    return (
      this.form.controls[control].invalid && this.form.controls[control].touched
    );
  }

  onCancel() {
    this.form.value = null;
    this.dialogRef.close(null);
  }

  onSubmit() {
    if (this.form.valid) {
      const note = this.form.value;

      this.dialogRef.close({
        author: note.author,
        content: note.content,
        date: this.data.date,
      });
    }
  }
}
