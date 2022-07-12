const DeletePosts = () => {

    async function handleSubmit(event){
        event.preventDefault()
        console.log("hello handlesubmit")
        loginUser()
    }
    
    return (
        <div className="delete-posts">

        </div>
      );
}
 
export default DeletePosts;