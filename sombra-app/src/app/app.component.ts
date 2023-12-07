import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; // Add this line

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  teamMembers = [
    { imageUrl: 'nazar-kulish.jpeg', initials: 'Nazar Kulish', role: 'Developer' },
    { imageUrl: 'vi.jfif', initials: 'Inshyn Valerii', role: 'Full Stack .NET Developer' },
    { imageUrl: 'daria-kyselytsia.JPG', initials: 'Daria Kyselytsia', role: 'Manager' },
    { imageUrl: 'kolya.png', initials: 'Mykola Mazur', role: 'Quality Assurance' }
  ];

  getImageUrl(imageFileName: string): string {
    return `assets/${imageFileName}`;
  }
}
