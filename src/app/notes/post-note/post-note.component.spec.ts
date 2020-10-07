import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

import { PostNoteComponent } from './post-note.component';

describe('PostNoteComponent', () => {
  let component: PostNoteComponent;
  let fixture: ComponentFixture<PostNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNoteComponent ],
      imports: [MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a button tag', () => {
    const buttonEl = fixture.debugElement.query(By.css('button'));
    expect(buttonEl.nativeElement).toBeTruthy();
  })
});
