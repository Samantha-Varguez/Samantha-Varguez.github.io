import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {

  interestsExperience : Array<any> = [];
  ngOnInit():void {
   let ach1 = {
    nombre: "Programación",
   }
   let ach2 = {
     nombre: "Cine",
   }
   let ach3 = {
    nombre: "Literatura",
  }
  let ach4 = {
    nombre: "Arte",
  };
  let ach5 = {
    nombre: "Idiomas",
  };
 
   this.interestsExperience.push(ach1);
   this.interestsExperience.push(ach2);
   this.interestsExperience.push(ach3);
   this.interestsExperience.push(ach4);
   this.interestsExperience.push(ach5);
   console.log(this.interestsExperience);
  }
}
