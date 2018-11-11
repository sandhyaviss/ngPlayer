import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";       
import { Video } from './video';



@Injectable()
 // {  providedIn: 'root'})
export class VideoService {
    private _getUrl = "/api/videos";
    private _postUrl="/api/videos";
    private _putUrl="/api/videos/";
    private _deleteUrl="/api/videos/";

  constructor(private _http:HttpClient) { }

  getVideos():Observable<Video[]>{
     return this._http.get<Video[]>(this._getUrl);
  }
 
  addVideo(video:Video){
    console.log("data in services "+video.title);
    console.log("data in service befor stringfy");
    console.log("data in services "+JSON.stringify(video));
    let headers = new HttpHeaders().set('Content-Type','application/json');    
    return this._http.post<Video>(this._postUrl,JSON.stringify(video), {headers: headers});   
  }
 
  updateVideo(video:Video){
    let headers = new HttpHeaders().set('Content-Type','application/json');
         return this._http.put(this._putUrl+ video.id,JSON.stringify(video),{headers: headers});
  }

  deleteVideo(video:any){
          return this._http.delete(this._deleteUrl+ video._id);
  }
}

