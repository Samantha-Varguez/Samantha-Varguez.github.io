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
    ubicacion: "Orizaba, Veracruz",
    puesto: "Desarrollo Frontend",
    empresa: "IA Sintomas",
    logros : [
{descripcion: "Desarrollo de Front End de sitio"},
{ descripcion: "Integracion de APIs"}    
]
  };
  let work2 = { fecha: "2022-2024",
    ubicacion: "Orizaba, Veracruz",
    puesto: "Administracion de Proyectos",
    empresa: "Star Cases",
    logros : [
{descripcion: "Planeacion del desarrollo de una pagina web"},
{ descripcion: "Integracion de herramientas IA "}, 
{descripcion: "Contribucion de herramientas de personalizacion de productos"}  ]
};

this.workExperience.push(work1);
this.workExperience.push(work2);
console.log(this.workExperience);
}
}
