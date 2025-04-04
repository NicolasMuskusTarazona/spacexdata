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
    console.log(`El cohete más liviano es: ${Liviano.rocket_name} con ${Liviano.mass.kg} kg`);
    return Liviano
}
await RocketLiviano()
