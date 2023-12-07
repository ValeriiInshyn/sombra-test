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
    { imageUrl: 'vi.jfif', initials: 'Inshyn Valerii', role: 'Full Stack .NET Developer' },
    { imageUrl: 'image2.jpg', initials: 'CD', role: 'Developer' },
    { imageUrl: 'image3.jpg', initials: 'EF', role: 'Manager' },
    { imageUrl: 'image4.jpg', initials: 'GH', role: 'Tester' }
  ];

  getImageUrl(imageFileName: string): string {
    return `assets/${imageFileName}`;
  }
}
