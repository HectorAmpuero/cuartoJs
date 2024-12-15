let alquilerHtml = ''
const alquilerRow = document.querySelector('#rowAlquiler')
const alquilerRowIndex = document.querySelector('#rowAlquilerIndex')

let toSmokeAlquiler = (smoke)=>{
    let mensaje = ''
    if (smoke===true) {
        mensaje= `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
    }
    return mensaje
}

let allowPetsAlquiler = (pet)=>{
    let mensaje = ''
    if (pet===true) {
        mensaje= `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
    }
    return mensaje
}

const propiedadesAlquiler = [
    {
        nombre: 'Alto Urbano',
        src: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Moderno departamento con vistas increíbles, diseñado para vivir en comodidad y estilo en el corazón de la ciudad.',
        ubicacion: 'Avenida Central 456, Edificio Vista Urbana, Ciudad Metropolis.',
        habitaciones: 2,
        banios:2,
        costo: 200000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Horizonte Marino',
        src: 'https://images.pexels.com/photos/12432029/pexels-photo-12432029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Exclusivo departamento frente al mar, con espacios luminosos y una vista inigualable para disfrutar la brisa costera.',
        ubicacion: 'Avenida Costanera 123, Edificio Brisa Azul, Playa Pacifica.',
        habitaciones: 3,
        banios: 2,
        costo: 2500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Condominio Río Sereno',
        src:'https://images.pexels.com/photos/16715771/pexels-photo-16715771/free-photo-of-mar-ciudad-costa-orilla-del-mar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Un exclusivo desarrollo residencial rodeado de naturaleza, con acceso al río y vistas espectaculares que conectan con la tranquilidad del entorno.' ,
        ubicacion: 'Camino del Río 456, Valle del Agua, Ciudad Refugio Natural.',
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Sol Dorado',
        src: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Acogedora casa con fachada amarilla, llena de luz y calidez, ideal para disfrutar momentos especiales en familia.',
        ubicacion: ' Calle Girasoles 234, Barrio Aurora, Ciudad Amanecer.',
        habitaciones: 4,
        banios: 2,
        costo: 9000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Refugio Alpino',
        src: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Encantadora cabaña estilo rústico, rodeada de montañas y perfecta para disfrutar de la naturaleza en su máxima expresión.',
        ubicacion: 'Camino del Bosque 678, Villa Nevada, Pueblo Altamira.',
        habitaciones: 4,
        banios: 2,
        costo: 100000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Esmeralda',
        src: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Hermosa propiedad moderna con amplios ventanales y un diseño elegante, rodeada de jardines verdes para disfrutar de la tranquilidad.',
        ubicacion: 'Avenida Verde 345, Residencial Prados del Sol, Ciudad Esplendor.',
        habitaciones: 4,
        banios: 2,
        costo: 160000,
        smoke: true,
        pets: true
    }
]

if (alquilerRow != null) {
    for (const propiedad of propiedadesAlquiler) {
        alquilerHtml += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${toSmokeAlquiler(propiedad.smoke)}
                    ${allowPetsAlquiler(propiedad.pets)}
                </div>
            </div>
        </div>
        `;
    }
    alquilerRow.innerHTML = alquilerHtml;
} else {
    let contador = 1;
    for (const propiedad of propiedadesAlquiler) { 
        if (contador > 3) {
            break;
        } else {
            alquilerHtml += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banios} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        ${toSmokeAlquiler(propiedad.smoke)}
                        ${allowPetsAlquiler(propiedad.pets)}
                    </div>
                </div>
            </div>
            `;
            contador++;
        }
    }
    alquilerRowIndex.innerHTML = alquilerHtml;
}