let htmlVenta = ''
const ventaRow = document.querySelector('#rowVenta')
const rowVentaIndex = document.querySelector('#rowVentaIndex')

let toSmoke = (smoke)=>{
    let mensaje = ''
    if (smoke===true) {
        mensaje= `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
    }
    return mensaje
}

let allowPets = (pet)=>{
    let mensaje = ''
    if (pet===true) {
        mensaje= `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
    }
    return mensaje
}

const propiedadesVenta = [
    {
        nombre: 'Casa residencial y familiar, barrio exclusivo ',
        src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Esta casa de espacios de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '321 Case Street, NY 5878',
        habitaciones: 4,
        banios:4,
        costo: 500000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa moderna',
        src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Esta casa acogedora está situada en la zona más exclusiva de la ciudad',
        ubicacion: '589 Casino Road, Winter Peaks, MI 65756',
        habitaciones: 6,
        banios:3,
        costo: 1200000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Hogar en barrio seguro',
        src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Casa situado en los barrio más seguros de la ciudad',
        ubicacion: '5712 Alameda, Santiago, CL 5788',
        habitaciones: 3,
        banios: 2,
        costo: 450000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'CasaVilla Armonía',
        src: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Un hogar acogedor rodeado de naturaleza, ideal para disfrutar tranquilidad y confort en cada rincón.',
        ubicacion: 'Calle Los Aromos 123, Barrio Tranquilo, Ciudad Esperanza.',
        habitaciones: 4,
        banios: 2,
        costo: 850000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Villa Mediterránea Sol y Mar',
        src: 'https://images.pexels.com/photos/29760164/pexels-photo-29760164/free-photo-of-preciosa-villa-mediterranea-con-palmeras.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: ' Un paraíso estilo mediterráneo con diseño exclusivo, rodeado de palmeras y espacios para disfrutar el sol y la brisa',
        ubicacion: 'Avenida del Sol 456, Playa Dorada, Ciudad Bella Vista.',
        habitaciones: 4,
        banios: 2,
        costo: 15000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Residencia Los Pinos',
        src: 'https://images.pexels.com/photos/15504477/pexels-photo-15504477/free-photo-of-casas-arbustos-afueras-exterior-del-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Elegancia y comodidad en un entorno verde y sereno, perfecta para quienes buscan calidad de vida.',
        ubicacion: 'Camino de los Pinos 789, Colina Verde, Ciudad Nueva Aurora.',
        habitaciones: 4,
        banios: 2,
        costo: 20000,
        smoke: false,
        pets: true
    }
]

const generarHTML = (container, propiedades, limite = null) => {
    let contador = 0;

    for (const propiedad of propiedades) {
        if (limite && contador >= limite) break;

        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | 
                        <i class="fas fa-bath"></i> ${propiedad.banios} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        ${toSmoke(propiedad.smoke)}
                        ${allowPets(propiedad.pets)}
                    </div>
                </div>
            </div>
        `;
        contador++;
    }
};


if (ventaRow) {
    generarHTML(ventaRow, propiedadesVenta); 
}

if (rowVentaIndex) {
    generarHTML(rowVentaIndex, propiedadesVenta, 3);
}