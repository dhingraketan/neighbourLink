import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

  openAPK(){
    window.open('https://drive.google.com/file/d/1MWvxCaw2KoVy5VcHftOd34Rp6M6JNbB9/view?usp=share_link', '_blank');
  }

  openZIP(){
    window.open('https://drive.google.com/file/d/1304L6ApgUTyVV-nG-0CH8B4na9I7kXIM/view?usp=share_link', '_blank');
  }

}
