export type Boleta = {
    _id: string,
    noboleta: number,
    fecha: number,
    lugar: string,
    firma: {
        _id: string,
        tipo: string
    },
    agente: {
        _id: string,
        nombre: string,
        chapa: string
    },
    articulo: {
        _id: string,
        desc: string,
        no: string,
        valor: number
    },
    conductor: {
        nombre: string,
        tipoLicencia: {
            _id: string,
            tipo: string,
            desc: string
        },
        noLicencia: string,
        folioLicencia: string,
        licenciaBloqueada: boolean,
        genero: string,
        _id: string
    },
    vehiculo: {
        tipoPlaca: {
            _id: string,
            tipo: string
        },
        noPlaca: string,
        marca: {
            _id: string,
            marca: string
        },
        color: {
            _id: string,
            color: string
        },
        tipo: {
            _id: string,
            tipo: string
        },
        noTarjeta: string,
        nit: string,
        _id: string
    },
    estado: string
}
