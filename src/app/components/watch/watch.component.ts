import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { DataConnectivityService } from 'src/app/service/data-connectivity.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  trustedDashboardUrl : SafeUrl=URL;
  videoLink : string = "";
  movie_id : String = "";
  movie : any;
  casts : any;

  constructor(private serv : DataConnectivityService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
      this.route.params.subscribe(videoUrl=>{
      this.videoLink=videoUrl['link'];
      this.movie_id=videoUrl['id'];
      this.serv.findById(this.movie_id).subscribe( (data :any)=> {  
        this.movie=data.body;        
      });
      this.serv.findCastByMovieId(this.movie_id).subscribe( (data :any)=> {  
        this.casts=data.body;        
      });
      this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    });
  }
}