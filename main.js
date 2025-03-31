let getALL = async() => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        method: "GET",
    }
    const response = await fetch(url,config)
    return response.json()
}
console.log(await getALL())