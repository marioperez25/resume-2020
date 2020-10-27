export default async function  profileLoader(api, setter, localStorageItem) {
    const storedItem = (window.localStorage.getItem(localStorageItem)) || false;
    if (storedItem !== false) {
        setter(JSON.parse(storedItem))
    } else {
        const response = await fetch(api)
        const data = await response.json()
        window.localStorage.setItem(storedItem,  JSON.stringify(data))
        setter(data)
    }
}