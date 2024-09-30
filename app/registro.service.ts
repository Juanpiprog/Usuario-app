import { Injectable } from '@angular/core';

class Persona {
    constructor(
        public nombre: string,
        public ci: string,
        public telefono: string,
        public ciudad: string
    ) {}

    toString(): string {
        return `${this.nombre}, CI: ${this.ci}, Teléfono: ${this.telefono}, Ciudad: ${this.ciudad}`;
    }
}

class Usuario extends Persona {
    constructor(
        nombre: string,
        ci: string,
        telefono: string,
        ciudad: string,
        public username: string
    ) {
        super(nombre, ci, telefono, ciudad);
    }
}

class Cliente extends Persona {
    constructor(
        nombre: string,
        ci: string,
        telefono: string,
        ciudad: string,
        public direccion: string
    ) {
        super(nombre, ci, telefono, ciudad);
    }
}

@Injectable({
    providedIn: 'root'
})
export class RegistroService {
    private usuarios: Usuario[] = [];
    private clientes: Cliente[] = [];

    agregarUsuario(nombre: string, ci: string, telefono: string, ciudad: string, username: string): void {
        const usuario = new Usuario(nombre, ci, telefono, ciudad, username);
        this.usuarios.push(usuario);
    }

    agregarCliente(nombre: string, ci: string, telefono: string, ciudad: string, direccion: string): void {
        const cliente = new Cliente(nombre, ci, telefono, ciudad, direccion);
        this.clientes.push(cliente);
    }

    mostrarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    mostrarClientes(): Cliente[] {
        return this.clientes;
    }

    eliminarUsuario(param: string): void {
        this.usuarios = this.usuarios.filter(usuario => !(usuario.ci === param || usuario.nombre === param));
    }

    eliminarCliente(param: string): void {
        this.clientes = this.clientes.filter(cliente => !(cliente.ci === param || cliente.nombre === param));
    }
}
