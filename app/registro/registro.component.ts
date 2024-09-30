import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private registroService: RegistroService) {}

  agregarUsuario() {
    this.registroService.agregarUsuario("Juan Pérez", "12345678", "555-1234", "Ciudad A", "juanp");
    this.registroService.agregarUsuario("lamerteer", "123", "555-5678", "Ciudad C", "lamerteer");
  }

  agregarCliente() {
    this.registroService.agregarCliente("María López", "87654321", "555-5678", "Ciudad B", "Calle Falsa 123");
    this.registroService.agregarCliente("culo", "878", "555-5678", "Ciudad D", "Calle Falsa 123");
  }

  mostrarUsuarios() {
    return this.registroService.mostrarUsuarios();
  }

  mostrarClientes() {
    return this.registroService.mostrarClientes();
  }

  eliminarUsuario() {
    this.registroService.eliminarUsuario("Juan Pérez");
  }

  eliminarCliente() {
    this.registroService.eliminarCliente("87654321");
    this.registroService.eliminarCliente("culo");
  }
}
