import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, map, Subscription, takeWhile, timer } from 'rxjs';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments : any =[];
  public parentId : String="";
  public comment : String="";
  public movieId : String="";
  public subComments:any=[];
  public editing : boolean=true;
  public eventId : any;
  public triggerCheck : any = ["as"];
  public timerSubscription: any; 
  @Input() currentUserId!:String;
  constructor(private commentServ : CommentsService, private route : ActivatedRoute,private router: Router) { 
  //   this.mySubscription= interval(5000).subscribe((x =>{
  //     console.log(this.subComments);
  // }));
  }

  ngOnInit(): void {
    this.movieId=this.route.snapshot.url[2].path;
    this.commentServ.getSubComments().subscribe((d:any)=>{
      this.subComments=d.body;   
    });
    this.commentServ.getComments(this.movieId).subscribe((data:any)=>{
      this.comments=data.body;    
      this.triggerCheck=this.comments;
    });  
    
    
    
    // this.timerSubscription = timer(0, 100).pipe( 
    //   map(() => { 
    //     console.log(window.location);
        
    //     if(!this.triggerCheck.length==this.comments.length){
          
    //     }
    //   }) 
    // ).subscribe(); 
  }

addComment(event : Event): void{    
    this.parentId="";
    this.comment=(document.getElementById('newComment') as HTMLDataElement).value;
    // console.log((document.getElementById('newComment') as HTMLElement).id);
    // (event.target as HTMLInputElement).style.visibility="block";
    // console.log((event.target as HTMLInputElement).style.visibility);
    var movie = {
      "parentId" : this.parentId,
      "comment" : this.comment,
      "movieId" : this.movieId
    };
    this.commentServ.addComments(movie);
    this.ngOnInit();
  }

  addReply(id : any) : void{
    console.log(id);
    this.eventId=id;
    const element = <HTMLElement> document.getElementsByClassName('vision')[0];
    if(this.editing){
      element.style.display = 'block';  
      this.editing=false;
    }else{
      element.style.display = 'none';  
      this.editing=true;
    }
    
    const el = document.getElementById(id);
    if (el != null) {
      console.log(el.style.visibility);
      if (el.style.visibility === 'none') {
        console.log(el.style.visibility);
        el.style.visibility = 'block';
      } else {        
        el.style.visibility = 'none';
      }
    }
  }

  submitReply(id:any) : void{  
    console.log(this.eventId);
      
    const element = <HTMLElement> document.getElementsByClassName('vision')[0];
    if(this.editing){
      element.style.display = 'block';  
      this.editing=false;
    }else{
      element.style.display = 'none';  
      this.editing=true;
    }
    this.parentId=id;
    this.comment=(document.getElementById('replyCmnt') as HTMLDataElement).value;
    console.log(this.comment);
    var comment = {
      "parentId" : this.eventId,
      "comment" : this.comment,
      "movieId" : 0
    };
    this.commentServ.addComments(comment);     
    this.ngOnInit();
  }  

  deleteReply(id:any):void{
    this.comments.forEach((element:any) => {
      if(element.id==id){
        this.commentServ.deleteComment(id);
      }
    });
    this.ngOnInit();
  }
}
