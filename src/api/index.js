const API_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT = "2206-FTB-ET-WEB-FT"

export const fetchAllPosts = async () => {
    try {
        const response = await fetch(`${API_URL} ${COHORT}/posts`)
        const result = await response.json()
        console.log('API Index', result)
        if(result.error) throw result.error
        return result.data.posts
    } catch (error) {
        console.error('Trouble fetching posts', error)
        
    }
}

export const registerPerson = async (
    registeredUsername,
    registeredPassword
) => {
    const response = await fetch(`${API_URL} ${COHORT}/users/register`,{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            user: {
                username: registeredUsername,
                password: registeredPassword,
            },
        }),
    })

    const result = await response.json()
    const token = result.data.token
    return token
}




export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL} ${COHORT}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
        })
        const result = await response.json()
        const token = result.data.token
        return token
        
    } catch (error) {
        console.error("Trouble fetching users", error)
    }
}




export const getProfile = async(token) => {
    const response = await fetch(`${API_URL}${COHORT}/users/me`,{
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
     })
    const result = await response.json()
    const data = result.data
    console.log(data, "This here be data fam")
    return data
}


export const postNew = async (token, addPost) => {
    const response = await fetch(`${API_URL}${COHORT}/posts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: addPost
            })
        })
    const result = await response.json()
    const newUserPost = result.data.post
    return newUserPost
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