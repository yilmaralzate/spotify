import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verArtista( item:any ){
    
    //console.log(item);
    let artistaId;

    if(item.type === 'artist')
    {
      artistaId = item.id;
    }
    else
    {
      artistaId = item.artists[0].id;
    }

    //console.log(artistaId);

    this.router.navigate(['/artist', artistaId ]);
  }

}
