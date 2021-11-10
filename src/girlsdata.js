export class Girlsdata {
    static create(girlsdata) {
        return fetch('https://my-awesome-whore-project-default-rtdb.firebaseio.com/girlsdata.json', {
            method: 'POST',
            body: JSON.stringify(girlsdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }
}