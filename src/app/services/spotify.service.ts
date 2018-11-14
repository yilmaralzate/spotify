import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify service ready');
   }

  getSpotifyReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAAMEHcNmdVy03QoA8TthZrR-A7OabmfVJsAESkcdM_UhinTkxf_EvrwU_KPpg9ulwytgzHnv7pWpwMzqY'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });
  }

}
