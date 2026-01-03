// promises

const loginUserPromise = (email) => {
    return new Promise((resolve, reject) => {
        const error = false

        if (error) {
            reject(new Error('Error in login!'))
        }

        console.log('User logged!')
        resolve({ email })
    })
}


const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        const error = false
        if (error) {
            reject(new Error('Video não encontrado'))
        }

        setTimeout(() => {
            console.log('get user videos')
            resolve(['video1', 'video2', 'video3'])
        }, 2000)
    })
}


const getVideoDetails = (videos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get videos details')
            resolve({ tittle: 'a nice video' })
        }, 2500)
    })
}

loginUserPromise('blablabla@legal', '123123')
    .then((user) => getUserVideos(user.email))
    .then((videos) => console.log({ videos }))
    .then((videos) => getVideoDetails(videos))
    .then((videoDetails) => console.log({ videoDetails }))
    .catch((error) => console.log({ error }))


// promise.all

const yt = new Promise((resolve) => {
    setTimeout(() => {
        resolve('videos from yt')
    }, 2000)
})

const fb = new Promise((resolve) => {
    setTimeout(() => {
        resolve('post from facebok')
    }, 3000)
})

Promise.all([yt, fb]).then((result) => {
    console.log({ result })
})