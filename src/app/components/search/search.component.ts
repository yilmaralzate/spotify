import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchArtistas:any[] = [];
  loading:boolean;
  error:boolean = false;
  mensajeError:string;

  constructor(private spotify:SpotifyService) {
  }
  
  ngOnInit() {
  }
  
  buscar(termino:string){

    this.loading = true;

    /*
    spotify.getSpotifyReleases().subscribe( (data:any) => {
      console.log(data.albums.items);
      this.canciones = data.albums.items;
    })
    */
   this.spotify.getArtistas(termino).subscribe( (data:any) => {

    //Anterior forma de llamar la data desde el servicio
    //console.log(data.artists.items);
    //this.artistas = data.artists.items;
    
    //console.log(data);
    this.searchArtistas = data;
    this.loading =  false;
   }, (err) => {
    this.mensajeError = err.error.error.message;
    this.error = true;
    this.loading = false;
   })
  }

}
