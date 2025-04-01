let getALL = async() => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url,config)
    return response.json()
}
console.log(await getALL())

let filtrarTipos = async() => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url,config)
    let data =await response.json()
    let filtrar = data.filter(tipoMerlin =>{
        if(tipoMerlin.engines.type  === "merlin")
        console.log(`Numero motor ${tipoMerlin.engines.number} Tipo: ${tipoMerlin.engines.type} y Nombre: ${tipoMerlin.rocket_name}`)
    })
    let filtrar2 = data.filter(filtrarRaptor =>{
        if(filtrarRaptor.engines.type === "raptor")
        console.log(`Numero motor: ${filtrarRaptor.engines.number} Tipo: ${filtrarRaptor.engines.type} y Nombre: ${filtrarRaptor.rocket_name}`)
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