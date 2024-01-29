import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../models/model';
import { CommonModule } from '@angular/common';
import { GetapiService } from '../getapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SenddatatoserverService } from '../senddatatoserver.service';

@Component({
  selector: 'app-activetasks',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './activetasks.component.html',
  styleUrl: './activetasks.component.css'
})
export class ActivetasksComponent implements OnInit {
  public http1$!: Observable<Todo[]>;
  public doneTasks$!: Observable<Todo[]>;
  constructor(private getapiservice:GetapiService,private senddata:SenddatatoserverService,private http:HttpClient){}
  title!:string;
  ngOnInit(): void {

    this.http1$=this.getapiservice.http$;
    this.doneTasks$ = this.http1$.pipe(
    map((todo) => todo.filter((todo) => todo.completed === true))
    );
  }
 public func(todo_id:number){
  this.senddata.send(todo_id,this.http);
 }
  

}
