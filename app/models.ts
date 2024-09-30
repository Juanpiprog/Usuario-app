// models.ts
export class Persona {
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

export class Usuario extends Persona {
  constructor(
      nombre: string,
      ci: string,
      telefono: string,
      ciudad: string,
      public username: string
  ) {
      super(nombre, ci, telefono, ciudad);
  }

  override toString(): string {
      return `${super.toString()}, Nombre de usuario: ${this.username}`;
  }
}

export class Cliente extends Persona {
  constructor(
      nombre: string,
      ci: string,
      telefono: string,
      ciudad: string,
      public direccion: string
  ) {
      super(nombre, ci, telefono, ciudad);
  }

  override toString(): string {
      return `${super.toString()}, Dirección: ${this.direccion}`;
  }
}
