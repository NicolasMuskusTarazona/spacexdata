let getALL = async() => {
    const url = "https://api.spacexdata.com/v3/rockets"
    const config = {
        METHOD: "GET"
    }
    const response = await fetch(url, config)
    return response.json()
}
