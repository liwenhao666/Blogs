/// [demo]
//引入js文件
const result = fetch(`${URL}:${PORT}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson))
    })
/// [demo]
