import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataConnectivityService {

  private movieUrl : string="http://localhost:8080/movies";
  private castUrl : string="http://localhost:8080/casts";
  
  constructor(private http : HttpClient){
   }


  public findAll(): any {
    let header = new HttpHeaders(  );
    return this.http.get(this.movieUrl,{headers: header, observe: "response"});
  }  

  public findById(id : String): any {
    let header = new HttpHeaders(  ); 
    return this.http.get(this.movieUrl+"/find/"+id,{headers: header, observe: "response"});
  }  

  public save(Movie : any):void{
      this.http.post(this.movieUrl, Movie).subscribe( data => {  
      console.log("Saved");
    });
  }

  public edit(Movie : any):void{
      this.http.put(this.movieUrl, Movie).subscribe( data => {
      console.log("data");
    });
  }

  public castFindAll(): any {
    let header = new HttpHeaders(  );
    return this.http.get(this.castUrl,{headers: header, observe: "response"});
  }  

  public castFindById(id : String): any {
    let header = new HttpHeaders(  ); 
    return this.http.get(this.castUrl+"/find/"+id,{headers: header, observe: "response"});
  }  

  public editCast(cast : any):void{
    this.http.put(this.castUrl, cast).subscribe( data => {
    });
  }  

    public saveCast(cast : any):void{
      this.http.post(this.castUrl, cast).subscribe( data => {  
      console.log("Saved");
    });
    }

  public castFindByName(name : String): any {
    let header = new HttpHeaders(  );
    return this.http.get(this.castUrl+"/findbyname/"+name,{headers: header, observe: "response"});
  }

  public addCastToMovie(castId : String, movieId : String):void{
    let header = new HttpHeaders(  );
    this.http.put(this.castUrl+"/link/"+castId+"/"+movieId,{headers: header, observe: "response"}).subscribe( data => {  
      console.log("Adding Cast");
    });
  }

  public findCastByMovieId(movieId : String):any{
    let header = new HttpHeaders(  );
    return this.http.get(this.movieUrl+"/findMovieCasts/"+movieId,{headers: header, observe: "response"});
  }
}
