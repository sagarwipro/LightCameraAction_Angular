import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';

@Component({
  selector: 'app-casthometile',
  templateUrl: './casthometile.component.html',
  styleUrls: ['./casthometile.component.css']
})
export class CasthometileComponent implements OnInit {
  
  casts: any;

  constructor(private serv: DataConnectivityService, private router:Router) { }

  ngOnInit(): void {
    this.serv.castFindAll().subscribe((data : any) => {
      this.casts = data.body;
      console.log(this.casts);
     });
  }



  editCast(event : Event):void{
    var id =  ((event.target) as HTMLElement).id;
    this.router.navigate(['/app-update-cast/'+id]);
  }

  onToggleWatchStatus(): void{
  }

}
