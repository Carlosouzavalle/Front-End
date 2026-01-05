fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "post",
    headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            userId: 1,
            id: 500,
            title: 'adfvghdafvshdg'
        }),
})
    .then((res) => {
        if(res.ok) {
            return res.json()
        }else (
            console.log('ERROR')
        )
    })

.then((json) => console.log(json))
.catch((error) => console.log(error))