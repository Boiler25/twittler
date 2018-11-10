import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/services/models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-getter',
  templateUrl: './note-getter.component.html',
  styleUrls: ['./note-getter.component.css']
})
export class NoteGetterComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NoteService) { }

  async ngOnInit() {
    this.notes = await this.noteService.getNotes();
  }

}
