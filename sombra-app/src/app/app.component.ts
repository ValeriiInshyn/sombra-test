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
    { imageUrl: 'image1.jpg', initials: 'AB', role: 'Project Manager' },
    { imageUrl: 'nazar_kulish.jpeg', initials: 'Nazar Kulish', role: 'Developer' },
    { imageUrl: 'image3.jpg', initials: 'EF', role: 'Manager' },
    { imageUrl: 'image4.jpg', initials: 'GH', role: 'Tester' }
  ];

  getImageUrl(imageFileName: string): string {
    return `assets/${imageFileName}`;
  }
}
