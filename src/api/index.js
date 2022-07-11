const API_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT = "2206-FTB-ET-WEB-FT"

export const getAllPosts = async () => {
    const response = await fetch(`${API_URL}${COHORT}/posts`)
    const result = await response.json()
    const data = result.data.posts 
    return data 
}

export const registerPerson = async (event) => {
    const registerUser = event.target[0].value
    const registerPassword = event.target[1].value
    console.log('get he event inputs', registerUser, registerPassword)
    console.log(`${API_URL}${COHORT}/users/register`)
    const response = await 
    fetch(`${API_URL}${COHORT}/users/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: 'spidercuz28',
                    password: 'we0utsid3'
                }
            })

        }
    )
    console.log(response)
}



export const loginUser = async (username, password) => {
    const response = await fetch(`${API_URL}${COHORT}/users/login`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
            }})
    }
    )
    const result = await response.json()
    const token = result.data.token
    return token
}

export const getProfile = async(token) => {
    const response = await fetch(`${API_URL}${COHORT}/users/me`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        }
        })
    const result = await response.json()
    const data = result.data
    return data
}
export const postNew = async (token, post) => {
    const response = await fetch(`${API_URL}${COHORT}/posts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: post
            })
        })
    const result = await response.json()
    const newPost = result.data.post
    return newPost
}

export const postMessage = async (token, postID, payload) => {
    const response = await fetch(`${API_URL}${COHORT}/posts/${postID}/messages`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: `${payload}`
                }
            })
        }
    
    )
    const result = await response.json()
    console.log(result, "posted message after API")
    return result
}

export const modifyPost = async(token, post, postID) => {
    const response = await fetch(`${API_URL}${COHORT}/posts/${postID}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: post
            })
        })
    const result = await response.json()
    console.log(result)
}

export const deletePost = async (token, postID) => {
    const response = await fetch(`${API_URL}${COHORT}/posts/${postID}`,
    {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
const result = await response.json()
console.log(result)
}