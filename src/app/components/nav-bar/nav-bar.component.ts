import { Component, OnInit } from '@angular/core';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public movies : any[] = [];
  public input : String="";
  public selectedMovie : any[] =[];

  constructor(private serv : DataConnectivityService) { }

  ngOnInit(): void {
    this.serv.findAll().subscribe((data:any)=>{
      this.movies=data.body;
    });
    // var element = (document.getElementById('myTable')) as HTMLInputElement;
    //   element.style.visibility="hidden";
  }

  modelChangeFn(e : any) {    

    this.selectedMovie=[];
    this.input = e;
    //  var el = document.getElementById('myTable') as HTMLInputElement;
    
    for(let i = 0; i<this.movies.length-1; i++){
      if(this.movies[i].name.includes(this.input)){
        this.selectedMovie[this.selectedMovie.length] = this.movies[i];
      }
    }
    
    if(this.input.length==0){
      this.selectedMovie=[];
    }

    // if (el != null) {
    //   if(this.selectedMovie.length!=0){
    //       el.style.visibility = 'visible';          
    //     }
    //     else{ 
    //       el.style.visibility = 'hidden';
    //     }      
    //   }
  }  
}
