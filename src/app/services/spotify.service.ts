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
      'Authorization':'Bearer BQAuE7dBJ-KdjYlUAUdFRid_Zao5esF_dqKz8ZSsSY2BF3MoErqIoaS5StLshi5CB_unBaGtYnsBOFyeK-U'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });
  }

}
