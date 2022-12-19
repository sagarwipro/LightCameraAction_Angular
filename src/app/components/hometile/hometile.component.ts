import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';
import { FindByService } from 'src/app/service/find-by.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-hometile',
  templateUrl: './hometile.component.html',
  styleUrls: ['./hometile.component.css'],
})
export class HometileComponent implements OnInit {
  movies: any;
  suggestedMovies : any;
  edited: Boolean = false;
  searchCasts : any;
  selectedMovie : any;
  showSearches: boolean = false;
  isSearching:boolean = false;
  casts:any;
  messageSorting:String ="";

  constructor(private serv: DataConnectivityService, private findserv: FindByService, private router:Router) { }

  ngOnInit(): void {
    this.serv.findAll().subscribe((data:any)=>{
      this.movies = data.body;
    });
  }

  editMovie(event : Event):void{
    var id =  ((event.target) as HTMLElement).id;
    this.router.navigate(['/app-update-movie/'+id]);
  }

  addCast(event : Event): void{    

    var id =  ((event.target) as HTMLElement).id;
    this.serv.findById(id).subscribe((data:any)=>{
      this.selectedMovie=data.body;
      console.log(this.selectedMovie);
      
    });
    const el = document.getElementById('k'+id);
    const btn = (event.target as HTMLInputElement);
    
    if (el != null) {
        if (el.style.visibility === 'hidden') {
          el.style.visibility = 'visible';
          btn.textContent = 'Done';
        } else {
          el.style.visibility = 'hidden';
          btn.textContent = 'Add Cast';
        }
    }
  }

  getData(event : Event): void{

    var id =  ((event.target) as HTMLElement).id;
    const el = document.getElementById(id);
    var value =(el as HTMLInputElement).value;

    this.serv.castFindByName(value).subscribe((data : any)=>{
      this.searchCasts = data.body;
     
      // var movies = {
      //   "id" : this.selectedMovie.id,
      //   "imageUrl" : this.selectedMovie.imageUrl,
      //   "name" : this.selectedMovie.name,
      //   "type" : this.selectedMovie.type,
      //   "description" : this.selectedMovie.description,
      //   "duration" : this.selectedMovie.duration,
      //   "releaseYear" : this.selectedMovie.releaseYear,
      //   "castsList" : this.searchCasts,
      // };
      
      // var casts = {
      //   "id" : this.searchCasts[0].id,
      //   "name" : this.searchCasts[0].name,
      //   "imageUrl" : this.searchCasts[0].imageUrl,
      //   "movieCastedList" : this.selectedMovie
      // }
      // console.log(casts);

    this.serv.addCastToMovie(this.searchCasts[0].id,this.selectedMovie.id);
    this.router.navigate(['/movies']);
    });
  }

  selectTypeChange(e : Event) : void{
   
    var name = ((e.target) as HTMLTextAreaElement).value;
    console.log(name);
    
    switch (name) {
      
      case "select":
        console.log(name);
        
        this.messageSorting="";
        this.suggestedMovies=[];
        break;

      case "cast":
        this.messageSorting="";
        this.findserv.findByCast().subscribe((data:any)=>{
          this.suggestedMovies=data.body;
          console.log(this.suggestedMovies);
          
        });   
        break;

      case "genre":
        this.messageSorting="";
        this.findserv.findByGenre().subscribe((data:any)=>{
          this.suggestedMovies=data.body;
          console.log(this.suggestedMovies);
        });   
        break;
      
      default:
        this.messageSorting = "Component Under Maintenance. Thank You!";
        this.suggestedMovies=null;
      break;
    }
  }
}