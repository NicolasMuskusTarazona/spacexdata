// Obtener toda la api
let getALL = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    return response.json()
}
console.log(await getALL())
// 1. Filtrar los `engines` de tipo *merlin* y *raptor* y obtener `rocket_name`
// 2. Obtener una `description` corta usando `substring` delimitado por puntos
let filtrarTipos = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    let data = await response.json()
    let filtrar = data.filter(tipoMerlin => {
        if (tipoMerlin.engines.type === "merlin") {
            console.log(`Numero motor: ${tipoMerlin.engines.number} Tipo: ${tipoMerlin.engines.type} y Nombre: ${tipoMerlin.rocket_name}`)
            tipoMerlin.engines.number == 1 && console.log(`Descripcion: ${tipoMerlin.description.substring(0, 110)}`)
            tipoMerlin.engines.number == 9 && console.log(`Descripcion: ${tipoMerlin.description.substring(0, 160)}`)
            tipoMerlin.engines.number == 27 && console.log(`Descripcion: ${tipoMerlin.description.substring(0, 300)}`)
        }
    })
    let filtrar2 = data.filter(filtrarRaptor => {
        if (filtrarRaptor.engines.type === "raptor")
            console.log(`Numero motor: ${filtrarRaptor.engines.number} Tipo: ${filtrarRaptor.engines.type} y Nombre: ${filtrarRaptor.rocket_name}`)
        filtrarRaptor.engines.number == 37 && console.log(`Descripcion: ${filtrarRaptor.description.substring(0, 152)}`)
    })
    return filtrar, filtrar2
}
await filtrarTipos()
// Filtra Raptor pero lo hace de una distinta mas compleja
// el filtrar2 junto al if lo subi y lo agrege al return

// let tipo2 = async() => {
//     const url = "https://api.spacexdata.com/v3/rockets"
//     const config = {
//         method: "GET",
//     }
//     const response = await fetch(url,config)
//     let data = await response.json()
//     let filtrar2 = data.filter(filtrarRaptor =>{
//         if(filtrarRaptor.engines.type === "raptor")
//         console.log(`Numero motor: ${filtrarRaptor.engines.number} Tipo: ${filtrarRaptor.engines.type}`)
//     })
//     return filtrar2
// }
// await tipo2()

// 3. Obtener solo los `name` de `payload_weights`
// [
// ]
// "payload_weights": [
//     {
//       "id": "leo",
//       "name": "Low Earth Orbit",
//       "kg": 450,
//       "lb": 992
//     }
//   ]
let weightsNames = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    let data = await response.json()
    let nombresotes = data.filter(nombres => {
        nombres.payload_weights.forEach(nombresitos => {
            console.log(`Pesos de carga util Nombres: ${nombresitos.name}`)
        });
    })
    return nombresotes
}
await weightsNames()

// 4. Calcular el total de los `cost_per_launch` de todos los rockets
let costPerLaunch = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    let data = await response.json()
    let costoLanzamiento = data.reduce((sum, value) => (sum + value.cost_per_launch), 0)
    console.log(`Total costo por lanzamiento: ${costoLanzamiento} $`)
    return costoLanzamiento
}
await costPerLaunch()


// 5. Calcular el rocket más liviano omitiendo su peso con carga
// No se puede usar el for each cuando no hay nada dentro del array
// {
// }
// "mass": {
//     "kg": 30146,
//     "lb": 66460
//   },
let RocketLiviano = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    let data = await response.json()
    let Liviano = data.reduce((comparar, value) =>
        (value.mass.kg < comparar.mass.kg ? value : comparar), data[0]);
    console.log(`El rocket mas liviano es: ${Liviano.rocket_name} con ${Liviano.mass.kg} kg`);
    return Liviano
}
await RocketLiviano()

// 6.Calcular el rocket más pesado omitiendo su peso con carga

let RocketPesado = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    let data = await response.json()
    let Pesado = data.reduce((comparar, value) =>
        (value.mass.kg > comparar.mass.kg ? value : comparar), data[0]);
    console.log(`El rocket mas pesado es: ${Pesado.rocket_name} con ${Pesado.mass.kg} kg`);
    return Pesado
}
await RocketPesado()

// 7. Obtener un listado de todas las fotos de `flickr_images`

let Listado_imagenes = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch (url, config)
    let data = await response.json()
    let Listado = data.filter (imagenes =>{
        console.log(`Nombre: ${imagenes.rocket_name}`)
        console.table(imagenes.flickr_images)
    })
    return Listado 
}
await Listado_imagenes()

// 8. Obtener el `rocket_name` que permita perder más motores (`engine_loss_max`)

let permiteperderMasMotores = async () => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    let data = await response.json()
    let motores = data.reduce((comparar, value) =>
        (value.engines.engine_loss_max > comparar.engines.engine_loss_max? value : comparar), data[0]);
    console.log(`El rocket mas pesado es: ${motores.rocket_name} con ${motores.engines.engine_loss_max}`);
    return motores
}
await permiteperderMasMotores()

// 9. Obtener los rockets(`id`,`rocket_id`,`rocket_name`,`active`, `first_flight`,`country`) 
// ordenados por el más alto al más bajo

let obtenerInformarcion = async() => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch (url,config)
    let data = await response.json()
    let informacion = data.filter ( info =>{
        console.log(`ID:${info.id} Rocket ID: ${info.rocket_id} Rocket Name: ${info.rocket_name} Active: ${info.active} Primer vuelo: ${info.first_flight} Pais: ${info.country}`)
    })
    return informacion
}

await obtenerInformarcion()

// 10. Obtener los distintos materiales `landing_legs`

let obtenerMateriales = async() => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch (url,config)
    let data = await response.json()
    let materiales = data.filter ( materials =>{
        console.log(`Numero: ${materials.landing_legs.number} Material: ${materials.landing_legs.material}`)
    })
    return materiales
}   

await obtenerMateriales()