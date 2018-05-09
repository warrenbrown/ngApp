import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Video } from './video';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {
  private domain = 'http://localhost:3000';
  constructor(private http: Http) { }

  getVideos() {
    return this.http.get(this.domain + '/api/videos').map(res => res.json());
  }

  createVideo(video: Video) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});
    return this.http.post(this.domain + '/api/video', JSON.stringify(video), options).map(res => res.json());
  }

  updateVideo(video: Video) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});
    return this.http.put(this.domain + '/api/video/' + video._id, JSON.stringify(video), options)
      .map(res => res.json());
  }

  deleteVideo(video: Video) {
    return this.http.delete(this.domain + '/api/video/' + video._id)
      .map(res => res.json());
  }

}
