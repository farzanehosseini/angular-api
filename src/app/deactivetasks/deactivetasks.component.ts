import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../models/model';
import { CommonModule } from '@angular/common';
import { GetapiService } from '../getapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SenddatatoserverService } from '../senddatatoserver.service';

@Component({
  selector: 'app-deactivetasks',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './deactivetasks.component.html',
  styleUrl: './deactivetasks.component.css'
})
export class DeactivetasksComponent  implements OnInit{
  title!:string;
  public http1$!: Observable<Todo[]>;
  public undoneTasks$!: Observable<Todo[]>;
  constructor(private getapiservice:GetapiService,private senddata:SenddatatoserverService,private http:HttpClient){}

  ngOnInit(): void {
    this.http1$=this.getapiservice.http$;
    this.undoneTasks$ = this.http1$.pipe(
    map((todo) => todo.filter((todo) => todo.completed !== true))
    );
  }
  public func(todo_id:number){
    this.senddata.send(todo_id,this.http);
   }

}
