import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token:any = {
    'Authorization':'Bearer BQAZJeGz3HQ9sGXnGfTYxJi81DVkOd2uHAwow_2sr5wEGaDtPk6NX8pSIm5ftxV3cl89tXVDc539cNyGu1Y'
  };
  private spotheader:HttpHeaders;

  constructor(private http:HttpClient) {
    console.log('Spotify service ready');
    //Obtener el nuevo token
    //Obtiene el token
    //Extrae la info del acces_token del token y crea la variable privada de tipo httpHeaders
    //Las funciones utilizan el token que se crea cada que se vaya a hacer una petición
   }

  getSpotifyReleases(){
    const headers = new HttpHeaders(this.token)
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });
  }

  getArtist(termino:String){
    //Petición get para obtener la info
    //https://api.spotify.com/v1/search?q=`${ termino }`&type=artist&limit=15
    const headers = new HttpHeaders(this.token)
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers });
    
  }

}
