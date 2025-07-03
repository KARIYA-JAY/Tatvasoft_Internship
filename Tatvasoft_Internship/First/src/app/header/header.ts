import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [Header,RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    
}
