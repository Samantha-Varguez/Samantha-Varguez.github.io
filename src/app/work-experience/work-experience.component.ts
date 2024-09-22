import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})

export class WorkExperienceComponent {
workExperience : Array<any> =[];
ngOnInit(): void {
  let work1 = {
    fecha: "2018-2022",
    ubicacion: "orizaba, Veracruz",
    puesto: "empleada",
    empresa: "empresa",
    logros : [
{descripcion: "Contruccion de un ERPE en la nube de google"},
{ descripcion: "Creacion de un cluster"}    
]
  };
  let work2 = { fecha: "2018-2022",
    ubicacion: "orizaba, Veracruz",
    puesto: "empleada",
    empresa: "empresa",
    logros : [
{descripcion: "Contruccion de un ERPE en la nube de google"},
{ descripcion: "Creacion de un cluster"}  ]
};

this.workExperience.push(work1);
this.workExperience.push(work2);
console.log(this.workExperience);
}
}
