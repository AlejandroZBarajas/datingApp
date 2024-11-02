import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router){}

  onLogoClick():void{  //ya funciona
    console.log("funciona")
    this.router.navigate(['main']);
  }

  toSettings(){
    this.router.navigate(['profile'])
  }
  
  cerrarSesion():void{  //ya funciona
    localStorage.setItem('rol',"")
    this.router.navigate(['home'])
  }
}
