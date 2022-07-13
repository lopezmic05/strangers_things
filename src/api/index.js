

export const API_URL = `https://strangers-things.herokuapp.com/api/`;
export const COHORT = "2206-FTB-ET-WEB-FT";



export async function getPosts() {
  try {
    const data  = await fetch(`${API_URL}${COHORT}/posts`);
    const result = await data.json()
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addPosts(postDetail, token){
  const response = await fetch(`${API_URL}${COHORT}/posts`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: postDetail.title,
        description: postDetail.description,
        location: postDetail.location,
        price: postDetail.price,
        willDeliver: postDetail.willDeliver,
      }
    })
  }) .then((response => response.json()))
  .then(result => {
    console.log(result)
  })
  .catch(console.error)
}


export async function loginUser (username, password) {
  try{
  const response = await fetch(`${API_URL}${COHORT}/users/login`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }})
    
  }
  )
  console.log(response, "response - loginUser")
  const result = await response.json()
  const token = result.data.token
  return token
  }catch(error){
    throw error
  }  
}


export async function connectProfile(token) {
  const response = await fetch(`${API_URL}${COHORT}/users/me`,
  {
    headers: {
      "Content-Type" : "application.json",
      "Authorization": `Bearer ${token}`
    }
  })
  const result = await response.json()
return result
}



export async function getUser(authToken){
  try{
    const userData ={
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${authToken}`
    }
    const response = await fetch(`${API_URL}${COHORT}/users/me`,{
      headers: userData
    })
    const result = await response.json()
    return result 
  } catch (error){
    throw error;
  }
}

export async function createUser (username, password){
  try {
  const response = await fetch (`${API_URL}${COHORT}/users/Register`,{
  method:"POST",
  headers: {
      "Content-Type":"application/json"
  },
  body:JSON.stringify({
      user:{
          username: username,
          password: password,
      }
  })
})
return response
}catch(error){
throw error;
}
}


export async function deletePosts(token, postid){
  try{
      const response = await fetch(`${API_URL}${COHORT}/posts/${postid}`, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }
      })
      const result = await response.json();
      return result;
  }catch (error){
      console.error("Problem deleting Posts", error)
  }
}

export async function sendMessage (token, postid, content){
  const response = await fetch(`${API_URL}${COHORT}/posts/${postid}/messages`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      message:{
        content: content,
      }
    })
  }).then (response => response.json())
  .then(result=>{
    console.log (result, "this is result for sendMessage");
  })
  .catch (console.error);
}