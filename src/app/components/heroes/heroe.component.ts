import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit
{

    heroe: Heroe =
        {
            bio: "",
            casa: "Marval",
            nombre: ""
        };

    constructor(private _heroeService: HeroesService) { }

    ngOnInit()
    {
    }

    guardar()
    {
        console.log(this.heroe);
        this._heroeService.nuevoHeroe(this.heroe)
            .subscribe(responseData =>
            {
                console.log("response Data", responseData);
            });
    }

}
