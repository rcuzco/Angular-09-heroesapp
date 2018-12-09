import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HeroesService
{

    heroesURL: string = "https://heroesapp-a24e3.firebaseio.com/heroes.json";
    heroeURL: string = "https://heroesapp-a24e3.firebaseio.com/heroes/";
    


    constructor(private http: Http) { }

    nuevoHeroe(heroe: Heroe)
    {
        let body = JSON.stringify(heroe);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //usando ecmascript6 no hay necesidad de definir así {headers:headers}, simplemente con {headers}
        //o sea, no es necesario esto {nombrePropiedad:valorPropiedad}, directamente podemos hacerlo así {valorPropiedad}
        return this.http.post(this.heroesURL, body, { headers }).pipe(map(res =>
        {
            console.log(res.json());
            return res.json();
        }));
    }

    actualizarHeroe(heroe: Heroe, key$:string)
    {
        let body = JSON.stringify(heroe);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.heroeURL}/${key$}.json`;
        //usando ecmascript6 no hay necesidad de definir así {headers:headers}, simplemente con {headers}
        //o sea, no es necesario esto {nombrePropiedad:valorPropiedad}, directamente podemos hacerlo así {valorPropiedad}
        return this.http.put(url, body, { headers }).pipe(map(res =>
        {
            console.log(res.json());
            return res.json();
        }));       
    }

    obtenerHeroe(key$: string)
    {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.heroeURL}/${key$}.json`;
        //usando ecmascript6 no hay necesidad de definir así {headers:headers}, simplemente con {headers}
        //o sea, no es necesario esto {nombrePropiedad:valorPropiedad}, directamente podemos hacerlo así {valorPropiedad}
        return this.http.get(url, { headers }).pipe(map(res =>
        {
            console.log(res.json());
            return res.json();
        }));
    }

    obtenerHeroes()
    {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        //usando ecmascript6 no hay necesidad de definir así {headers:headers}, simplemente con {headers}
        //o sea, no es necesario esto {nombrePropiedad:valorPropiedad}, directamente podemos hacerlo así {valorPropiedad}
        return this.http.get(this.heroesURL, { headers }).pipe(map(res =>
        {
            console.log(res.json());
            return res.json();
        }));
    }
}
