const NewMessage = () => {

    async function handleSubmit(event){
        event.preventDefault()
        console.log("hello handlesubmit")
        loginUser()
    }

    
    return ( 
        <div className="new-message">

        </div>
     );
}
 
export default NewMessage;