import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../registro.service';
import { Usuario, Cliente } from '../models';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule] // Add imports here
})
export class RegistroComponent {
  usuarios: Usuario[] = [];
  clientes: Cliente[] = [];
  
  nuevoUsuario: Usuario = { nombre: '', ci: '', telefono: '', ciudad: '', username: '' };
  nuevoCliente: Cliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };

  constructor(private registroService: RegistroService) {
    this.cargarDatos();
  }

  cargarDatos() {
    this.usuarios = this.registroService.mostrarUsuarios();
    this.clientes = this.registroService.mostrarClientes();
  }

  agregarUsuario() {
    this.registroService.agregarUsuario(this.nuevoUsuario.nombre, this.nuevoUsuario.ci, this.nuevoUsuario.telefono, this.nuevoUsuario.ciudad, this.nuevoUsuario.username);
    this.cargarDatos();
    this.resetNuevoUsuario();
  }

  agregarCliente() {
    this.registroService.agregarCliente(this.nuevoCliente.nombre, this.nuevoCliente.ci, this.nuevoCliente.telefono, this.nuevoCliente.ciudad, this.nuevoCliente.direccion);
    this.cargarDatos();
    this.resetNuevoCliente();
  }

  eliminarUsuario(ci: string | null) {
    if (ci) {
      this.registroService.eliminarUsuario(ci);
      this.cargarDatos();
    }
  }

  eliminarCliente(ci: string | null) {
    if (ci) {
      this.registroService.eliminarCliente(ci);
      this.cargarDatos();
    }
  }

  private resetNuevoUsuario() {
    this.nuevoUsuario = { nombre: '', ci: '', telefono: '', ciudad: '', username: '' };
  }

  private resetNuevoCliente() {
    this.nuevoCliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };
  }
}
