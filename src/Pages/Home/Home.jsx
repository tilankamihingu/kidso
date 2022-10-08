import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/carousels/Slider';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Home.css';
import Mission from '../../images/mission.jpg';
import Green from '../../images/green.jpg';
import Banner from '../../images/banfinal.png';
import Math from '../../images/math.jpg';
import Eng from '../../images/english.jpg';
import Enter from '../../images/enter.jpg';

const Home = () => {
   

    useEffect(() => {
        Aos.init({duration: 2000 });
    })
    return (
        <div className="full">
            <div className="home-container">
                <div className="home-content">
                <div className="home-left">
                    <h1>Kidsable Certificate Wallet</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iste quidem, voluptate sit quo </p>
                    <div>
                       <Link to="/products"><button type="button"><span></span>View Certificates</button></Link> 
                    </div>
                </div>
                <div className="home-right">
                    <img src={Banner} alt="" />
                </div>
                </div>
            </div>
            {/*----------third container---------*/}
            <div className="third-container">
                <div className="third-container-left" data-aos="fade-up">
                    <h3>That A Look And find out more about</h3>
                    <h1>our mission</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem quaerat in, molestiae recusandae, eveniet eligendi repellat voluptatem, rerum enim asperiores a vitae facilis nulla voluptate maiores. Cum, eveniet corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque aspernatur aut nulla? Nisi voluptatibus tempora ab, repellat inventore est totam consequatur velit veritatis illum in atque odit libero accusamus.</p>
                    <h2>Find out more about us</h2>
                </div>
                <div className="third-container-right" data-aos="fade-up">
                    <img src={Mission} alt="" />
                </div>
            </div>
            
            {/*--------------product items---------------*/}
            <div className="product-items-full">
                <h1>Gallery</h1>
                <div className="product-items-container">
                    <Slider />
                </div>
            </div>
            {/*--------------fifth container------------*/}
            <div className="fifth-container">
                <div className="fifth-container-left" data-aos="fade-up">
                    <h3>Mobile Version</h3>
                    <h1>We Maintain our mobile App</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias illo hic quod veniam corporis ea? Ab, architecto aspernatur.</p>
                    <h2>Read More</h2>
                </div>
                <div className="fifth-container-right" data-aos="fade-up">
                    <img src={Green} alt="" />
                </div>
            </div>
            <div className="games">
                <div className="games-container">
                    <h1>Our Games</h1>
                    <div className="games-row" data-aos="fade-up">
                        <div className="games-card">
                            <img src={Math} alt="" />
                        </div>
                        <div className="games-card">
                            <img src={Eng} alt="" />
                        </div>
                    
                        <div className="games-card">
                            <img src={Enter} alt="" />
                        </div>
                    
                        
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
