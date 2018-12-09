import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit
{
    heroes: Heroe[];
    loading: boolean = true;

    constructor(private _heroeService: HeroesService)
    {
    }

    ngOnInit()
    {
        this.obtenerHeroes();
    }

    obtenerHeroes()
    {
        this._heroeService.obtenerHeroes()
            .subscribe(responseData =>
            {
                //reponseData trae la info desde firebase, peroNO la trae como un array de objetos sino como un objeto q tiene objetos por dentro, o sea
                //que de buenas a primeras no le podríamos hacer un *ngFor... entonces ¿qué hacemos?
                this.heroes = responseData;
                this.loading = false;
            },
                error =>
                {
                    console.log(error);
                });
    }

    borrarHeroe(key$: string)
    {
        this._heroeService.borrarHeroe(key$)
            .subscribe(responseData =>
            {
                this.obtenerHeroes();
            },
                error =>
                {
                    console.log(error);
                });
    }

}
