export interface Patient {
    [index: number]: Patient;
    PacienteId: string;
    DNI: string;
    Nombre: string;
    Direccion?: string;
    CodigoPostal:string;
    Telefono: string;
    Genero: string;
    FechaNacimiento: string;
    Correo: string
}