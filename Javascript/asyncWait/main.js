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
        const error = true
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

const displayUser = async () => {
    try {
        const user = await loginUserPromise('dshadus@dasudasu', '123123')
        const videos = await getUserVideos(user.email)
        const videoDetails = await getVideoDetails(videos[0])

        console.log({ videos })
        console.log({ videoDetails })
    } catch (error) {
        console.log({error})
    }


}

displayUser()