// will call getData when button is clicked
export const onReceiveData = (data) => ({
    type: 'DATA_RECEIVED',
    data
})
//will actually get the data
export const getData = () => {
    
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => data.map(pic =>(
            {
                id: pic.id,
                title: pic.title,
                url: pic.url,
                thumbnail: pic.thumbnailUrl
            }
        )));
}