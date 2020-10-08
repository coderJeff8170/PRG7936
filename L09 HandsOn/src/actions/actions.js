export const onReceiveData = (data) => ({
    type: 'DATA_RECEIVED',
    data
})

export const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(response => response.items.map(pic =>(
            {
                id: pic.id,
                title: pic.title,
                url: pic.url,
                thumbnail: pic.thumbnailUrl
            }
        )))
}