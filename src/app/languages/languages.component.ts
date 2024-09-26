import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languagesExperience : Array<any> = [];
 ngOnInit():void {
  let lan1 = {
    nombre: "Español",
    nivel: "C2",
  }
  let lan2 = {
    nombre: "Ingles",
    nivel: "C1",
  }
  let lan3 = {
    nombre: "Aleman",
    nivel: "A2",
  }
  ;

  this.languagesExperience.push(lan1);
  this.languagesExperience.push(lan2);
  this.languagesExperience.push(lan3);
  console.log(this.languagesExperience);
 }
}
