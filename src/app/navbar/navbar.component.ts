import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  toRepo(){
    // Redirect to the repository link of the project on GitHub in a new tab
    window.open('https://github.sfu.ca/kda59/neighbourLink', '_blank');
    
  }

}
