import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { v4 as uuid } from 'uuid';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes_data: Note[] = [
    {
      id: '1',
      author: 'eran',
      content: 'do the test of britanica',
      date: new Date('01-01-2018 00:03:44'),
    },
    {
      id: '2',
      author: 'ifat',
      content: 'study for the ML course',
      date: new Date('01-11-2019 00:03:44'),
    },
    {
      id: '3',
      author: 'agam',
      content: 'study for school',
      date: new Date('05-03-2020 00:03:44'),
    },
    {
      id: '4',
      author: 'romi',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: new Date('11-03-2020 00:03:44'),
    },
    {
      id: '5',
      author: 'yonatan',
      content: 'finish building the train',
      date: new Date('09-11-2018 00:03:44'),
    },
  ];

  private notesStore: any = [];
  private notesSubject$ = new BehaviorSubject([]);
  notes = this.notesSubject$.asObservable();

  constructor() {
    
  }

  sortNotes() {
    this.notesStore = this.notesStore.sort(
      (a: Note, b: Note) => b.date.getTime() - a.date.getTime()
    );
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notesStore));
  }

  loadNotes() {
    const storageNotes = JSON.parse(localStorage.getItem('notes'));
    if (!storageNotes) {
      this.notesStore = [...this.notes_data];
      this.sortNotes();
    } else {
      this.notesStore = storageNotes;
    }

    this.saveNotes();
    this.notesSubject$.next(this.notesStore);
  }

  addNote(note: Note) {
    const id: string = uuid();
    this.notesStore.push({
      id,
      author: note.author,
      content: note.content,
      date: new Date(),
    });
    this.notesSubject$.next(this.notesStore);
    this.sortNotes();
    this.saveNotes();
  }

  deleteNote(id: string) {
    const index = this.notesStore.findIndex((note) => note.id === id);

    if (this.notesStore && this.notesStore.length > 0) {
      this.notesStore.splice(index, 1);
      this.notesSubject$.next(this.notesStore);
      this.saveNotes();
    }
  }

  updateNote(id: string, note: Note) {
    const index = this.notesStore.findIndex((n) => n.id === id);
    if (index > -1) {
      this.notesStore[index] = { id, ...note };
      this.notesSubject$.next(this.notesStore);
      this.saveNotes();
    }
  }
}
