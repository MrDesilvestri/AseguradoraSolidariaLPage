import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", Validators.required],
      last_name: ["", Validators.required],
      placa: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
        this.validarPlacaFormatoAsync,
      ],
      email: ["", [Validators.required, Validators.email]],
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }
  validarPlacaFormatoAsync(control: AbstractControl): Promise<any> | null {
    return new Promise((resolve) => {
      const placa = control.value;
      const placaRegex = /^[A-Z]{3}\d{3}$/;

      if (!placaRegex.test(placa.toUpperCase())) {
        resolve({ placaInvalida: true });
      } else {
        resolve(null);
      }
    });
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
