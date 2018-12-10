import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  canciones:any[] = [];

  constructor(private spotify: SpotifyService) {
    spotify.getSpotifyReleases().subscribe( (data:any) => {
      console.log(data.albums.items);
      this.canciones = data.albums.items;
    })
   }

  ngOnInit() {
  }

}
