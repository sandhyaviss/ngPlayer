import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateEvent','deleteEvent']
})
export class VideoDetailComponent implements OnInit{
  private tempUrl:any;
  private video:any;
  private temp:any;
  private editTitle: boolean = false;
  private updateEvent = new EventEmitter;
  private deleteEvent= new EventEmitter;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    }

  ngOnChanges(){
    this.editTitle = false;
    this.tempUrl=this.video.url.replace("watch?v=", "embed/");
    this.temp =
    this.sanitizer.bypassSecurityTrustResourceUrl(this.tempUrl);
  }

  onTitlechange(){
   this.editTitle = true;
  }

  updateVideo(){
   this.updateEvent.emit(this.video);
  }

  deleteVideo(){  
    this.deleteEvent.emit(this.video);
    console.log("delete videofrom detail view" + this.video.title);
  }


  }

