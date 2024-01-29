import { Injectable, OnInit } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Todo } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class GetapiService  {

  constructor() { }
  
    http$:Observable<Todo[]> = new Observable((observer) => {
     fetch('https://jsonplaceholder.typicode.com/todos')
       .then((response) => {
        return response.json();
    })
       .then((body) => {
        observer.next(body);
        observer.complete();
       })
       .catch((err) => {
         observer.error(err);
       });
    });
  
}
