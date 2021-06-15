import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'
//images import
import man from '../../../assets/images/dashboard/man.png'
export class UserMenu extends Component {
    render() {
        return (
            <Fragment>
                    <li className="onhover-dropdown">
                        <div className="media align-items-center">
                            <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={man} alt="header-user" />
                            <div className="dotted-animation"><span className="animate-circle"/><span className="main-circle"/></div>
                        </div>
                        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                            <li><Link to={`/admin/settings/profile`} ><i data-feather="user"/>Edit Profile</Link></li>
                            <li><a href="#"><i data-feather="mail"/>Inbox</a></li>
                            <li><a href="#"><i data-feather="lock"/>Lock Screen</a></li>
                            <li><a href="#"><i data-feather="settings"/>Settings</a></li>
                            <li><Link to={`/admin`}><i data-feather="log-out"/>Logout</Link></li>
                        </ul>
                    </li>
            </Fragment>
        )
    }
}

export default UserMenu
