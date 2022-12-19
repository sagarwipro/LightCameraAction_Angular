import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';


@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  public imageUrl : String = "";
  public name : String="";
  public type : String = "";
  public description : String= "";
  public duration : number = 0;
  public releaseYear : number= 0;
  public watchLink : String = "";
  public details : String = "";

  constructor(private serv: DataConnectivityService, private router:Router) { }

  ngOnInit(): void {
    console.log("Add-Movie");    
  }

  addMovie():void{ 
    var movie = {
      "imageUrl" : this.imageUrl,
      "name" : this.name,
      "type" : this.type,
      "description" : this.description,
      "duration" : this.duration,
      "releaseYear" : this.releaseYear,
      "castsList": [],
      "watchLink" : this.watchLink,
      "details" : this.details
    };
     this.serv.save(movie);
     this.router.navigate(['/movies']);
  }
}
