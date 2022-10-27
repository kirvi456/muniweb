
export interface TrabajadorDepartamento {    
    nombre: string,
    puesto: string    
}

export interface ContactoDepartamento {  
    tipo: string,
    contacto: string,
    descripcion?: string
}

export interface HorarioDepartamento {
    lunes: {
        horaInicio: string,
        horaFin: string
    }[],
    martes: {
        horaInicio: string,
        horaFin: string
    }[],
    miercoles: {
        horaInicio: string,
        horaFin: string
    }[],
    jueves: {
        horaInicio: string,
        horaFin: string
    }[],
    viernes: {
        horaInicio: string,
        horaFin: string
    }[],
    sabado: {
        horaInicio: string,
        horaFin: string
    }[],
    domingo: {
        horaInicio: string,
        horaFin: string
    }[],
}

export interface Departamento {
    abreviatura: string,
    nombre: string,
    descripcion: string,
    objetivo: string,
    imgPresentacion: string,
    imgOrganigrama: string,
    ubicacion: {img : string, sedeURL : string, sedeDesc: string},
    funciones: string[],
    trabajadores: TrabajadorDepartamento[],
    contactos: ContactoDepartamento[],
    horarios: HorarioDepartamento
}

export const emptyDepartamento : Departamento = {
    abreviatura: '',
    nombre: '',
    descripcion: '',
    objetivo: '',
    imgPresentacion: '',
    imgOrganigrama: '',
    ubicacion: {img : '', sedeURL : '', sedeDesc: ''},
    funciones: [],
    trabajadores: [],
    contactos: [],
    horarios: {
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: [],
    }
}

export const listaDeptos : Departamento [] = [
    {
        nombre: 'Dirección de Tecnologia de la Informacion',
        abreviatura: 'DTI1',
        imgPresentacion: 'https://aprende.guatemala.com/wp-content/uploads/2016/09/San-Jose-Pinula-Guatemala.jpg',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet tincidunt mauris, eu tincidunt velit eleifend a. Quisque facilisis felis nec imperdiet convallis. Proin mattis sollicitudin mi, et convallis nulla sodales vel. In et mauris mollis purus pharetra semper in id metus. Vestibulum leo tortor, feugiat facilisis aliquet sit amet, ultrices id risus. In hac habitasse platea dictumst. Quisque ultrices purus in ex tempus, quis porttitor nibh feugiat. Phasellus viverra, velit dictum molestie mattis, justo dolor gravida enim, et efficitur quam tortor vel dolor. Suspendisse dapibus tempus mauris id eleifend. Suspendisse est nibh, pretium at elementum a, consequat non tortor. Ut massa dolor, condimentum ac magna et, feugiat pellentesque est. Donec eget dapibus ex. Phasellus eu turpis diam.',
        objetivo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet tincidunt mauris, eu tincidunt velit eleifend a. Quisque facilisis felis nec imperdiet convallis. Proin mattis sollicitudin mi, et convallis nulla sodales vel. In et mauris mollis purus pharetra semper in id metus. Vestibulum leo tortor, feugiat facilisis aliquet sit amet, ultrices id risus. In hac habitasse platea dictumst. Quisque ultrices purus in ex tempus, quis porttitor nibh feugiat. Phasellus viverra, velit dictum molestie mattis, justo dolor gravida enim, et efficitur quam tortor vel dolor. Suspendisse dapibus tempus mauris id eleifend. Suspendisse est nibh, pretium at elementum a, consequat non tortor. Ut massa dolor, condimentum ac magna et, feugiat pellentesque est. Donec eget dapibus ex. Phasellus eu turpis diam.',
        imgOrganigrama: '',
        ubicacion: {img: '', sedeURL: '', sedeDesc: ''},
        funciones: [
            'Desrrollo de aplicaciones Desrrollo de aplicaciones Desrrollo de aplicaciones Desrrollo de aplicaciones Desrrollo de aplicaciones Desrrollo de aplicaciones',
            'Control del servicio tecnico',
            'Administracion de la base de datos',
            
            'Desrrollo de aplicaciones',
            'Control del servicio tecnico',
            'Administracion de la base de datos',
            
            'Desrrollo de aplicaciones',
            'Control del servicio tecnico',
            'Administracion de la base de datos',
            
            'Desrrollo de aplicaciones',
            'Control del servicio tecnico',
            'Administracion de la base de datos'
        ],
        trabajadores: [
            {
                nombre: 'Bryan Otoniel Ordoñez Morales',
                puesto: 'Director'
            },
            {
                nombre: 'Selvin Herrera',
                puesto: 'Tecnico de Soporte'
            },
            {
                nombre: 'Jorge Alvizures',
                puesto: 'Asistente'
            }
        ],
        contactos: [
            {
                tipo: 'email',
                contacto: 'bryanordonezdti@gmail.com',
                descripcion: 'director'
            },
            {
                tipo: 'telefono',
                contacto: '50168878',
                descripcion: 'director'
            }
        ],
        horarios: {
            lunes:[{
                horaInicio: '7:00 am',
                horaFin: '16:00 pm'
            }],
            martes:[{
                horaInicio: '7:00 am',
                horaFin: '16:00 pm'
            }],
            miercoles:[{
                horaInicio: '7:00 am',
                horaFin: '16:00 pm'
            }],
            jueves:[{
                horaInicio: '7:00 am',
                horaFin: '16:00 pm'
            }],
            viernes:[{
                horaInicio: '7:00 am',
                horaFin: '16:00 pm'
            }],
            sabado: [],
            domingo: []
        }
    }
];