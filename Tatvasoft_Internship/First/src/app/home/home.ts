import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 name = "jay";
  username = "";
  pass = "";

  Store(){
    console.log(this.username)
    console.log(this.pass)
  }
}
