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

    constructor(private _heroeService: HeroesService)
    {
    }

    ngOnInit()
    {
        this._heroeService.obtenerHeroes()
            .subscribe(responseData =>
            {
                console.log(responseData);
                this.heroes = responseData;
            },
            error =>
            {
                console.log(error);
            });
    }

}
