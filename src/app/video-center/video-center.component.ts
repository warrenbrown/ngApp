import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [ VideoService ]
})
export class VideoCenterComponent implements OnInit {
  videos: Video[];

  selectedVideo: Video;
  private hiddenVideo: boolean = true;

  constructor( private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hiddenVideo = true;
    console.log(video);
  }

  onSubmitAddVideo(video: Video) {
    this.videoService.createVideo(video).subscribe(resNewVideo => {
      this.videos.push(resNewVideo);
      this.selectedVideo = resNewVideo;
    });
  }

  onUpdateVideoEvent(video: any) {
    this.videoService.updateVideo(video).subscribe(resUpdatedVideo => {
      this.videos.push(resUpdatedVideo);
      this.selectedVideo = null;
    });
  }

  onDeleteVideoEvent(video: any) {
    const videoArray = this.videos;
    this.videoService.deleteVideo(video)
    .subscribe(resDeleteVideo => {
      for (let i = 0; i < videoArray.length; i++) {
        if (videoArray[i]._id === video._id) {
          videoArray.splice(i, 1);
        }
      }
    });
    this.selectedVideo = null;
  }

  newVideo() {
    this.hiddenVideo = false;
  }

}
