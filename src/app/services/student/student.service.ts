import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from 'src/app/commons/models/character/character';

@Injectable()
export class StudentService {
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Gets a List object type Character corresponding to the received house.
   * @method get
   * @returns {Observable<Object>}
   */
  get(): Observable<object> {
    return this.http.get<Character[]>(`http://hp-api.herokuapp.com/api/characters/students`)
      .pipe(
        catchError(this.handleError<Character[]>('get Student', []))
      );;
  }

  /**
   * Stores new student
   * @method storeStudent
   * @param {Character} student
   * @returns {void}
   */
  storeStudent(student: Character): void {
    console.log(student, JSON.stringify(student));
    localStorage.setItem('stored_student', JSON.stringify(student));
    console.log(this.getStudent());
    
  }

  /**
   * Retrieve Stored student
   * @method getStudent
   * @param {Character} student
   * @returns {Character}
   */
  getStudent(): Character {
    let retrievedStudent = localStorage.getItem('stored_student');

    console.log(retrievedStudent);
    let student: Character = JSON.parse(retrievedStudent || '{}');
    console.log(student);
    // if (Object.keys(student).length > 0) {
    //   student.dateOfBirth = moment.utc(student.dateOfBirth);
    // }

    return student;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
