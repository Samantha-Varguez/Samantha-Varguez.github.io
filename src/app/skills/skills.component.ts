import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    skillsExperience : Array<any> = [];
   ngOnInit():void {
    let ski1 = {
      nombre: "Python",
    }
    let ski2 = {
      nombre: "Javascript",
    }
    let ski3 = {
      nombre: "Java",
    }
    let ski4 = {
      nombre: "HTML/CSS",
    }
    let ski5 = {
      nombre: "Manejo de Microsoft Office",
    }
    let ski6 = {
      nombre: "Manejo de Git/Github",
    }
    ;
  
    this.skillsExperience.push(ski1);
    this.skillsExperience.push(ski2);
    this.skillsExperience.push(ski3);
    this.skillsExperience.push(ski4);
    this.skillsExperience.push(ski5);
    this.skillsExperience.push(ski6);
    console.log(this.skillsExperience);
}
}
