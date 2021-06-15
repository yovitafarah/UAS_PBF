import React from 'react';
import {Link} from 'react-router-dom'

function LogoImage(props) {

    return <Link to={`/users/home`} >
                <img src={`/users/assets/images/icon/${props.logo}`} alt="" className="img-fluid" />
            </Link>;
}

export default LogoImage;