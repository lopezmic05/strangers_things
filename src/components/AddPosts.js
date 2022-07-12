const AddPosts = () => {

    async function handleSubmit(event){
        event.preventDefault()
        console.log("hello handlesubmit")
        loginUser()
    }
    
    return ( 
        <div className="add-posts">

        </div>
     );
}
 
export default AddPosts;