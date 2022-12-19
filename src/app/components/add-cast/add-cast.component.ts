import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';

@Component({
  selector: 'app-add-cast',
  templateUrl: './add-cast.component.html',
  styleUrls: ['./add-cast.component.css']
})

export class AddCastComponent implements OnInit {
  public imageUrl : String = "";
  public name : String="";
  public type : String = "";
  public description : String= "";
  public duration : number = 0;
  public releaseYear : number= 0;

  constructor(private serv: DataConnectivityService, private router:Router) { }

  ngOnInit(): void {
    console.log("Add-Cast");    
  }

  addCast():void{ 
    var cast = {
      "imageUrl" : this.imageUrl,
      "name" : this.name,
      "movieCastedList": []
    };
    console.log(this.name);
    
     this.serv.saveCast(cast);
     this.router.navigate(['/casts']);
  }
}
