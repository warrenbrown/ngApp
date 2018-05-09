import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

import { VideoService } from './video.service';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    NavbarComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
