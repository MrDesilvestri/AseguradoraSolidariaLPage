import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      Placa: ['', [Validators.required], [this.validarPlacaFormatoAsync.bind(this)]],
      Correo: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', Validators.pattern('[0-9]{10}')],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      this.markFormGroupTouched(this.formulario);
    }
  }
  validarPlacaFormatoAsync(control: AbstractControl): Promise<any> | null {
    return new Promise((resolve) => {
      const placa = control.value;
      const placaRegex = /^[A-Z]{3}\d{3}$/; // Ejemplo de formato AAA111

      if (!placaRegex.test(placa)) {
        resolve({'placaInvalida': true});
      } else {
        resolve(null);
      }
    });
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
