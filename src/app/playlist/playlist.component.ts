import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';
import {Video} from './../video';
import { Observable } from "rxjs";    
import { splitClasses } from '../../../node_modules/@angular/compiler';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
 providers:[VideoService]
})

export class PlaylistComponent implements OnInit {
 public selectedVideo:Video;
 public editToggle = false;

 videos: Array<Video>;
 
  constructor(private _videoService:VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(data =>this.videos=data);
    console.log(this.videos);
  }

 onSelectedVideo(video:any){
   this.selectedVideo= video;
   this.editToggle= false;
   console.log(this.selectedVideo);
 }

 Toggle(){
   this.editToggle = true;
   console.log(this.editToggle);
 }

 //response the data that is inserted and push the inserted data to video array
 onsubmitVideo(video){
   console.log("in video submit"+video.title);
  this._videoService.addVideo(video).subscribe(data=>{
      this.videos.push(data);
    this.selectedVideo= data;
    console.log("video postfro playlist omponents "+ data.title);
    this.editToggle=false;
  });
 }

 //
 onUpdateEvent(video:any){
  this._videoService.updateVideo(video).subscribe(res=> video=res);
  this.selectedVideo = null;
   };

   ondeleteVideoEvent(video:any){
     let videoArray = this.videos;
     console.log(video.title+"to be delted video");
          this._videoService.deleteVideo(video).subscribe(
           res =>{
          videoArray.map((ele,i)=>{
                if(ele.title==video.title){
                  videoArray.splice(i,1);
                }
          });
          this.videos= videoArray;
           }
          );
          this.selectedVideo= null;
   }
}
