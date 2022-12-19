import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';

@Component({
  selector: 'app-add-cast-to-movie',
  templateUrl: './add-cast-to-movie.component.html',
  styleUrls: ['./add-cast-to-movie.component.css']
})
export class AddCastToMovieComponent implements OnInit {

  public movie : any;
  public castList : any;
  public id : String ="";
  public imageUrl : String = "";
  public description : String = "";
  public name : String = "";
  public type : String = "";
  public duration : number = 0;
  public releaseYear : number= 0;

  constructor(private serv: DataConnectivityService,private router:Router, private activatedRoute: ActivatedRoute) {}  
  
  ngOnInit(): void {  
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || ""; 
    this.serv.findById(this.id);
  }

  updateMovie():void{
    var movies = {
      "id" : this.id,
      "imageUrl" : this.imageUrl,
      "name" : this.name,
      "description" : this.description,
      "castsList" : this.castList,
      "duration": this.duration,
      "releaseYear": this.releaseYear,
      "type": this.type
      };
    this.serv.edit(movies);    
    this.router.navigate(['/movies']);
  }
}