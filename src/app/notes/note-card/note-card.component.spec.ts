import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Note } from '../note.model';

import { NoteCardComponent } from './note-card.component';

describe('NoteCardComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteCardComponent, TestHostComponent],
      imports: [MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;

    

    fixture.detectChanges();
  });

  it('should create', () => {
    
    
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-testhost-note-card',
  template: `<app-note-card [note]=note></app-note-card>`, // or whatever your Chart Component Selector is
})
export class TestHostComponent {
  note: Note = {
    id: '1000',
    author: 'eran',
    content: 'I wrote this',
    date: new Date(),
  };
  
}
