import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];

  constructor(private spotify:SpotifyService) {
  }

  ngOnInit() {
  }

  buscar(termino:string){
    /*
    spotify.getSpotifyReleases().subscribe( (data:any) => {
      console.log(data.albums.items);
      this.canciones = data.albums.items;
    })
    */
   this.spotify.getArtist(termino).subscribe( (data:any) => {
    console.log(data.artists.items);
    this.artistas = data.artists.items;
   })
  }

}
