import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {

  achievementExperience : Array<any> = [];
  ngOnInit():void {
   let ach1 = {
    nombre: "Exposición de pintura UV",
    fecha: "2024",
   }
   let ach2 = {
    
     nombre: "Participación en Becalos English Challenge",
     fecha: "2023-2024",
   };
   let ach3 = {
    nombre: "Segundo lugar en examen de ingreso UV a nivel regional",
    fecha: "2022",
   };
 
   this.achievementExperience.push(ach1);
   this.achievementExperience.push(ach2);
   this.achievementExperience.push(ach3);
   console.log(this.achievementExperience);
  }
}
