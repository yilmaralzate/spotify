import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token:string;
  private spotheader:HttpHeaders;

  constructor(private http:HttpClient) {
    console.log('Spotify service ready');
    //Obtener el nuevo token
    //Obtiene el token
    //Extrae la info del acces_token del token y crea la variable privada de tipo httpHeaders
    //Las funciones utilizan el token que se crea cada que se vaya a hacer una petición
   }

  getSpotifyReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDXfVr5f5jl9tj7MCNHLDp5v88EgOG9Vt0MPw94xtLy6LIkDihijMSXzC-dqPIWvVERBiB9_4YO2UM44K0'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });
  }

  getArtist(termino:String){
    //Petición get para obtener la info
    //https://api.spotify.com/v1/search?q=yilmar&type=artist&limit=15
  }

}
