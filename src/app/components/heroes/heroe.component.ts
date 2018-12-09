import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit
{

    private heroe: Heroe =
        {
            bio: "",
            casa: "Marvel",
            nombre: ""
        };

    nuevo: boolean = false;
    id: string;

    constructor(private _heroeService: HeroesService, private router: Router, private route: ActivatedRoute)
    {
        this.route.params.subscribe(paramertrosURL =>
        {
            console.log(paramertrosURL);
            this.id = paramertrosURL["id"];
            if (this.id == "nuevo")
            {
                //insertando
                this.nuevo = true;
            }
            else
            {
                //actualizando
                this.nuevo = false;
                this._heroeService.obtenerHeroe(this.id)
                    .subscribe(responseData =>
                    {
                        console.log(responseData);
                        this.heroe = responseData;
                    },
                    error =>
                    {
                        console.log(error);
                    });
            }
        });
    }

    ngOnInit()
    {
    }

    guardar()
    {
        console.log(this.heroe);
        if (this.nuevo)
        {
            //insertar
            this._heroeService.nuevoHeroe(this.heroe)
                .subscribe(responseData =>
                {
                    console.log("response Data", responseData);
                    this.router.navigate(['/heroe', responseData.name]);
                },
                    error =>
                    {
                        console.log(error);
                    });
        }
        else
        {
            //actualizar
            this._heroeService.actualizarHeroe(this.heroe, this.id)
                .subscribe(responseData =>
                {
                    console.log("response Data", responseData);
                    this.router.navigate(['/heroe', this.id]);
                },
                    error =>
                    {
                        console.log(error);
                    });
        }
    }

    agregarNuevo(forma:NgForm)
    {
        this.router.navigate(["/heroe", "nuevo"]);
        forma.reset();
    }
}
