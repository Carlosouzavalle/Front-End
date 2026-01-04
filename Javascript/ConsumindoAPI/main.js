const title = document.getElementById('title')
const content = document.getElementById('content')

axios.get('https://www.animenewsnetwork.com/encyclopedia/title/1220/api.php')
    .then((response) => {
        content.innerText = response.data
    })
    .catch(() => {
        title.innerText = 'Erro ao Carregar Anime'
    })
