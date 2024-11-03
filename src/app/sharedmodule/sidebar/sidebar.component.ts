import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  rol = ('') 

  constructor(private router: Router){
    this.rol = localStorage.getItem("rol") ?? ('')
  }

  onLogoClick():void{ 
    console.log("funciona")
    this.router.navigate(['main']);
  }

  toSettings(){
    this.router.navigate(['profile'])
  }
  
  cerrarSesion():void{ 
    localStorage.setItem('rol',"")
    this.router.navigate(['home'])
  }
  toPost(){
    this.router.navigate(['newPost'])


  }
}
