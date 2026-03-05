import { Component } from '@angular/core';
import { LucideAngularModule, Github, Mail, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,  
  imports: [
    LucideAngularModule]
  ,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
