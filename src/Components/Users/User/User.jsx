import { Link, useNavigate } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {name , email, id} = user
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/user/${id}`)
    }
    return (
        <div className='user'>
            <h5>Name: {name}</h5>
            <p>Email: {email} </p>
            <Link to = {`/user/${id}`}>Show details.</Link>
            <button onClick={handleClick}>Click to Show details.</button>
        </div>
    );
};

export default User;