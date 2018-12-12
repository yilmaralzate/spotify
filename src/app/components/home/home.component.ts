import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  homeCanciones:any[] = [];
  loading:boolean;
  error:boolean = false;
  mensajeError:string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    
    spotify.getSpotifyReleases().subscribe( (data:any) => {
      //console.log(data);
      this.homeCanciones = data;
      this.loading = false;

    }, (err) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = err.error.error.message;
      console.log(err);
    })
   }

  ngOnInit() {
  }

}
