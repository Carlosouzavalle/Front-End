// Callbacks
const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {
        const error = false

        if (error) {
            return onError(new Error('Error in login!'))
        }

        console.log("User logged!")
        onSucess({ email })
    }, 1500);
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

const getDetails = (videos, callback) => {
    setTimeout(() => {
        callback({ tittle: 'a nice video' })
    }, 2500)
}

const user = loginUser('cadu123123@legal.com', 123123, (user) => {
    console.log({ user })
    getUserVideos(user.email, (videos) => {
        console.log({ videos })
        getDetails(videos[0], (videosDetails) => {
            console.log({ videosDetails })
        })
    })
}, (error) => {
    console.log({ error })
})




// uma função callback é uma função passada para ser executada em algum momento mais tarde 
// um dos problemas da callback é que você coloca uma função dentro da outra e isso fca muito confuso