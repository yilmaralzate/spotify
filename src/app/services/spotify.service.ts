import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token:any = {
    'Authorization':'Bearer BQCCDeX_pPGngstliMXSjNjj17hjn7Ap9scvSJdKui_bfVxfKA3Zvzl1S4RWNzKZ1yrbxAh6eoazz9K-O9U'
  };
  private spotheader:HttpHeaders;

  constructor(private http:HttpClient) {
    console.log('Spotify service ready');
    //Obtener el nuevo token
    //Obtiene el token
    //Extrae la info del acces_token del token y crea la variable privada de tipo httpHeaders
    //Las funciones utilizan el token que se crea cada que se vaya a hacer una petición
   }

  getRequest(htQuery:string){

    const url = `https://api.spotify.com/v1/${ htQuery }`;
    const headers = new HttpHeaders(this.token);
    return this.http.get(url,{ headers });
  }

  getSpotifyReleases(){

    //Sin optimizar debo usar headers
    //const headers = new HttpHeaders(this.token);

    //return sin el operador map
    //return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });

    //return sin optimizar
    /*
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
      .pipe( map(data => {
        return data['albums'].items;
      }));
    */

    //Centralizando la peticion en una funcion
    return this.getRequest('browse/new-releases')
                .pipe( map( data => {
                return data['albums'].items;
              }));
  }

  getArtistas(termino:String){
    
    //Sin optimizar debo usar headers
    //const headers = new HttpHeaders(this.token);
    
    //Return sin map
    //return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers });

    //Return con map pero sin optimizar
    /*
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers })
    .pipe( map( data => {
      return data['artists'].items;
    }));
    */
    
    return this.getRequest(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => {
                  return data['artists'].items;
                }));

  }

  getArtistById(id:string) {
    return this.getRequest(`artists/${ id }`);
                //.pipe( map( data => {
                  //return data['artists'].items;
                //}));
  }

  getTopTracks(id:string) {
    return this.getRequest(`artists/${ id }/top-tracks?country=US`)
                .pipe( map( data => {
                  return data['tracks'];
                }));
  }

}
