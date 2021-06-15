import React, { Component,Fragment } from 'react'
import SearchHeader from './searchHeader';
import UserMenu from './userMenu';
import { AlignLeft, MoreHorizontal } from 'react-feather';

//images
import logo from '../../../assets/images/dashboard/multikart-logo.png'
import PropTypes from "prop-types";
import {connect} from "react-redux";

export class Header extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            sidebar: true,
            rightSidebar: true,
            navMenus: false
        }
    }

    toggle() {
        this.setState(prevState => ({
            navMenus: !prevState.navMenus
        }));
    }
    showRightSidebar = () => {
        if (this.state.rightSidebar) {
            this.setState({ rightSidebar: false })
            document.querySelector(".right-sidebar").classList.add('show');
        } else {
            this.setState({ rightSidebar: true })
            document.querySelector(".right-sidebar").classList.remove('show');
        }
    }
    goFull = () => {
        if (document.fullScreenElement ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }
    openCloseSidebar = () => {
        if (this.state.sidebar) {
            this.setState({ sidebar: false })
            document.querySelector(".page-main-header").classList.add('open');
            document.querySelector(".page-sidebar").classList.add('open');
        } else {
            this.setState({ sidebar: true })
            document.querySelector(".page-main-header").classList.remove('open');
            document.querySelector(".page-sidebar").classList.remove('open');
        }
    }
    render() {
        return (
            <Fragment>
                {/* open */}
                <div className="page-main-header ">
                    <div className="main-header-right row">
                        <div className="main-header-left d-lg-none" >
                            <div className="logo-wrapper">
                                <a href="#">
                                    <img className="blur-up lazyloaded" src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="mobile-sidebar">
                            <div className="media-body text-right switch-sm">
                                <label className="switch"><a onClick={this.openCloseSidebar}><AlignLeft /></a></label>
                            </div>
                        </div>
                        <div className="nav-right col">
                            <ul className={"nav-menus " + (this.state.navMenus ? 'open' : '')}>
                                <li>
                                    <SearchHeader />
                                </li>

                                <UserMenu />
                            </ul>
                            <div className="d-lg-none mobile-toggle pull-right" onClick={() => this.toggle()}><MoreHorizontal /></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state
    }
}

export default connect(mapStateToProps)(Header)

