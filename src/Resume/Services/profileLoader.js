export default async function  profileLoader(api, setter, nameInLocalStore) {
    const storedItem = (window.localStorage.getItem(nameInLocalStore))
    if (storedItem) {
        setter(JSON.parse(storedItem))
    } else {
        const response = await fetch(api)
        const data = await response.json()
        window.localStorage.setItem(nameInLocalStore, JSON.stringify(data))
        setter(data)
    }
}