import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})

export class MovieHomeComponent implements OnInit {

  constructor(private http : HttpClient) { }
  
  ngOnInit(): void {

  }

  onPlayerWatch():void{
  }

  onToggleWatchStatus(): void{
  }


}
