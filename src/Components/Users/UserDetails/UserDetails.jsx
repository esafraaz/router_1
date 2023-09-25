import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(-1);
    }
    // console.log(user)
    const {name, email, id} = user
    return (
        <div>
            <h6>name: {name}</h6>
            <h6>name: {email}</h6>
            <h6>name: {id}</h6>
            <button onClick = {handleClick} >Go back.</button>
        </div>
    );
};

export default UserDetails;