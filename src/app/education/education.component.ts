import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
 educationExperience : Array<any> = [];
 ngOnInit():void {
  let edu1 = {
    fecha: "2022-2026",
    ubicacion: "Ixtac Ver",
    carrera: "Ingenieria de Software",
    escuela: "UV Facultad de Negocios y Tecnologias"
  }
  let edu2 = {
    carrera: "Educacion Preparatoria",
    fecha: "2019-2022",
    ubicacion: "Orizaba Ver",
    escuela: "Preparatoria Colegio Mexico",
  };

  this.educationExperience.push(edu1);
  this.educationExperience.push(edu2);
  console.log(this.educationExperience);
 }
}
