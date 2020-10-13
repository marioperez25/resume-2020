export default async function  profileLoader(api, setter) {
    const response = await fetch(api)
    const data = await response.json()
    setter(data)
}