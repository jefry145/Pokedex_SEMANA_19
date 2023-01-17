import { Component } from '@angular/core';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad19';

  data:any[] = [];
  
  criterio!:any


  PokemonName:any[] = [];

  constructor(private pokedex:ServiciosService){}


    ngOnInit():void{
      this.getPokemons()
      console.log(this.data)
    }


  getPokemons(){

    let pokemonData;

    for(let i = 21; i < 40; i++){


      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            orden: res.order
          }
          this.data.push(pokemonData)
          this.PokemonName.push(pokemonData.name)
          // console.log(res);
        
        
      })

    }
  }
}
