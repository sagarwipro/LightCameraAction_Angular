import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';

@Component({
  selector: 'app-update-cast',
  templateUrl: './update-cast.component.html',
  styleUrls: ['./update-cast.component.css']
})
export class UpdateCastComponent implements OnInit {

  public id : String ="";
  cast: any = null;
  public imageUrl : String = "";
  public name : String="";
  
  constructor(private serv: DataConnectivityService,private router:Router, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {    
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || "";
    console.log(this.id);
    
    this.serv.castFindById(this.id).subscribe((data : any)=>{    
      this.cast=data.body;
      this.id=this.cast.id;
      this.imageUrl=this.cast.imageUrl;
      this.name=this.cast.name;
    });
  }

  updateCast():void{
    var cast = {
      "id" : this.id,
      "imageUrl" : this.imageUrl,
      "name" : this.name,
      "movieCastedList": []
    };
    this.serv.editCast(cast);
    this.router.navigate(['/casts']);
  }
}