import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';

// Import custom components
import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "../../services/script"
import TopCollection from "./common/collection"
import Header from "../common/headers/header"
import Footer from "../common/footers/footer"
import {ToastContainer} from "react-toastify";

class Beauty extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `/users/assets/css/color4.css` );
    }

    render(){

        return (
            <div>
                <Helmet>
                    <title>React.js | Beauty Store</title>
                </Helmet>
                <Header logoName={'logo.png'}/>
                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home34">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to beauty</h4>
                                                    <h1>beauty products</h1><a href="#" className="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home35">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>save 30% off</h4>
                                                    <h1>beauty products</h1><a href="#" className="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>


                {/*About Section*/}
                <section className="beauty-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1 text-center">
                                <img src={`/users/assets/images/beauty/about-us.jpg`} alt="" className="img-fluid blur-up lazyload" />
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-12">
                                <div className="about-section">
                                    <div>
                                        <h2>about us</h2>
                                        <div className="about-text">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam.sit voluptatem
                                                accusantium doloremque laudantium,totam rem aperiam.</p>
                                        </div>
                                        <div className="service small-section pb-0">
                                            <div className="row">
                                                <div className="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                                    <h5>free shipping</h5>
                                                </div>
                                                <div className="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                                    <h5>24 X 7 service</h5>
                                                </div>
                                                <div className="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                                    <h5>festival offer</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About Section End*/}

                {/*Product slider*/}
                <TopCollection type={'beauty'} />
                {/*Product slider End*/}

                {/*Video Section*/}
                <section className="video-section pt-0">
                    <div className="title1">
                        <h4>special offer</h4>
                        <h2 className="title-inner1">product tutorial</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <a href="#" onClick={this.onOpenModal}>
                                    <div className="video-img">
                                        <img src={`/users/assets/images/beauty/video_1.jpg`} alt="" className="img-fluid blur-up lazyload" />
                                        <div className="play-btn">
                                            <span><i className="fa fa-play" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </a>
                                <Modal
                                    open={this.state.open}
                                    onClose={this.onCloseModal}
                                    id="video"
                                    className="modal fade video-modal" center>
                                    <iframe src="https://www.youtube.com/embed/FRIDLxM8Roc"
                                            allowFullScreen></iframe>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Video Section End*/}

                {/*Product slider*/}
                <TopCollection type={'beauty'} />
                {/*Product slider End*/}

                <Footer logoName={'logo.png'}/>

                <ToastContainer />
            </div>
        )
    }
}


export default Beauty;