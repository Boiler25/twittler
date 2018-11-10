import { Injectable } from '@angular/core';
import { Note } from './models/note';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

constructor(private httpClient: HttpClient) { }
private url = 'http://localhost:50947';
public getNotes(id?: number): Promise<Note[]> {

  let params = new HttpParams();
  if (id) {
    params = params.append('id', id.toString());

  return this.httpClient.get<Note[]>(this.url, { params }).toPromise();
  }
}
}
