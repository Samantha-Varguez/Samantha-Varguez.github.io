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
{ descripcion: "Integración de APIs"}    
]
  };
  let work2 = { fecha: "2022-2024",
    ubicacion: "Orizaba, Veracruz",
    puesto: "Administración de Proyectos",
    empresa: "Star Cases",
    logros : [
{descripcion: "Planeación del desarrollo de una página web"},
{ descripcion: "Integración de herramientas IA "}, 
{descripcion: "Contribución de herramientas de personalización de productos"}  ]
};

this.workExperience.push(work1);
this.workExperience.push(work2);
console.log(this.workExperience);
}
}
