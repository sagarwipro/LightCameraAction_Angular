import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindByService {

  private movieUrl : string="http://localhost:8080/movies";
  private castUrl : string="http://localhost:8080/casts";


  constructor(private http : HttpClient) { }

  public findByGenre(): any {
    let header = new HttpHeaders(  ); 
    return this.http.get(this.movieUrl+"/sortbygenre",{headers: header, observe: "response"});
  }  

  public findByCast(): any {
    let header = new HttpHeaders(  ); 
    return this.http.get(this.movieUrl+"/sortbycast",{headers: header, observe: "response"});
  }  

  // public findByRating(id : String): any {
  //   let header = new HttpHeaders(  ); 
  //   return this.http.get(this.movieUrl+"/find/"+id,{headers: header, observe: "response"});
  // }  
}
