
formDOM = document.querySelector("form")

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    try {
        const res = await axios.post(
            '/api/v1/chat/createUser',
            {name},
            {headers: {sessionId: localStorage.getItem("sessionId")}})

        const data = res.data
        localStorage.setItem("sessionData", JSON.stringify(data))
        window.location.href = "/chat"

    } catch (error) {
        console.log(error)
    }

})
