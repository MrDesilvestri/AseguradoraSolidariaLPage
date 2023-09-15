import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  LogoImages = './assets/images/LogoAseguradora.png';
  Back1Images = './assets/images/Banner2.jpg';
  Back2Images = './assets/images/Back2Image.jpg';
  AsistenciaImage = './assets/images/AsistenciaImage.jpg';
  CorreoImage = './assets/images/CorreoImage.png';

  form!: FormGroup;
  isMenuActive = false; // Inicialmente, el menú está inactivo

  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive; // Cambia el estado del menú (activo/inactivo)
  }
}
