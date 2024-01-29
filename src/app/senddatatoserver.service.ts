import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class SenddatatoserverService {

  constructor() { }

    public send(todo_id: number,http:HttpClient) {
      const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todo_id}`;
      http.get(apiUrl).subscribe(
  
        (response: any)=>{
        console.log('داده با موفقیت به سرور ارسال شد.',response);
        alert('id= ' + response.id + ' &  title= ' +response.title + '  & completed= ' +response.completed );
      },
      error=>{
        console.error('خطا در ارسال',error);
      }
      );
    }
  
  
}
