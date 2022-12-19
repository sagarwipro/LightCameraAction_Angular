import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  public id : String ="";
  movie: any = null;
  public imageUrl : String = "";
  public name : String="";
  public type : String = "";
  public description : String= "";
  public duration : number = 0;
  public releaseYear : number= 0;
  public castList : any;
  public watchLink : String="";
  public details : String="";
  
  constructor(private serv: DataConnectivityService,private router:Router, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {    
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || "";
    this.serv.findById(this.id).subscribe((data : any)=>{    
      this.movie=data.body;
      this.id=this.movie.id;
      this.duration=this.movie.duration;
      this.description=this.movie.description;
      this.imageUrl=this.movie.imageUrl;
      this.releaseYear=this.movie.releaseYear;
      this.type=this.movie.type;      
      this.name=this.movie.name;      
      this.castList=this.movie.castsList;
      this.watchLink = this.movie.watchLink;
      this.details = this.movie.details;
    });
    console.log(this.id);
    
  }

  updateMovie():void{
    var movies = {
      "id" : this.id,
      "imageUrl" : this.imageUrl,
      "name" : this.name,
      "type" : this.type,
      "description" : this.description,
      "duration" : this.duration,
      "releaseYear" : this.releaseYear,
      "castsList" : this.castList,
      "watchLink" : this.watchLink,
      "details" : this.details,
    };
    console.log(movies);
    
    this.serv.edit(movies);    
    this.router.navigate(['/movies']);
  }
}