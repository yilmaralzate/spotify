import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista:any = {};
  topTracks:any[] = [];
  loading:boolean;
  tracksLoading:boolean;

  constructor(private route: ActivatedRoute, private spotify:SpotifyService) { 

    //Tener disponibles los parametros recibidos por url
    this.route.params.subscribe( params => {
      
      //console.log(params);
      //console.log(params['id']);

      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );

    });

  }

  ngOnInit() {
  }

  getArtista(id:string){

    this.loading = true;

    this.spotify.getArtistById(id)
                  .subscribe( art => {
                    console.log(art);
                    this.artista = art;
                    this.loading = false;

                    //Get top tracks
                    //this.getTopTracks( id );
                  });
  }

  getTopTracks(id:string){
    this.tracksLoading = true;

    this.spotify.getTopTracks(id)
                  .subscribe( tracks => {
                    console.log(tracks);
                    this.topTracks = tracks;
                  });
  }

}
