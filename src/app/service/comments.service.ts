import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentUrl : string="http://localhost:8080/comments";

  constructor(private http : HttpClient) { }

  public getComments(id:any) : any{
    let header = new HttpHeaders(  );
    return this.http.get(this.commentUrl+"/find/"+id,{headers: header, observe: "response"});
  }
  public getSubComments() : any{
    let header = new HttpHeaders(  );
    return this.http.get(this.commentUrl+"/subcomments/",{headers: header, observe: "response"});
  }

  public addComments(comment : any):void{
    this.http.post(this.commentUrl,comment).subscribe(data=>{
    });
  }

  public deleteComment(id:any):void{
    this.http.delete(this.commentUrl+"/delete/",id);
  }
}