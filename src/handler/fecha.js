// Handler generador de fecha
export function fecha() {
    const fechaNueva = new Date();

    const opcionesConfig = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('en-US', opcionesConfig);
}