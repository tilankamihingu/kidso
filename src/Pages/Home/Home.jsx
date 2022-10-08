import React, {useContext, useEffect} from 'react';
import { DataContext } from '../../components/Context';
import { Link } from 'react-router-dom';
import Slider from '../../components/carousels/Slider';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Home.css';
import Milk from '../../images/milk.png';
import Lemon from '../../images/lem.png';
import Mission from '../../images/mission.jpg';
import Store from '../../images/store.jpg';
import Green from '../../images/green.jpg';
import Banner from '../../images/banfinel.png';
import Mix from '../../images/mix.jpg';
import Banana from '../../images/banana.jpg';
import Stawbery from '../../images/stawbery.jpg';
import Graps from '../../images/graps.jpg';

const Home = () => {
    const value = useContext(DataContext)
    const [specials] = value.specials

    useEffect(() => {
        Aos.init({duration: 2000 });
    })
    return (
        <div className="full">
            <div className="home-container">
                {/*<div className="content">
                    <h1>Choose Your Juice</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ipsum?</p>
                    <div>
                        <button type="button"><span></span> View Items</button>
                    </div>
                </div>
    <img src={Green} alt="" />*/}
                <div className="home-content">
                <div className="home-left">
                    <h1>Choose Your Juice</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iste quidem, voluptate sit quo esse sunt culpa corporis amet maiores.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iste quidem, voluptate sit quo esse sunt culpa corporis amet maiores.</p>
                    <div>
                       <Link to="/products"><button type="button"><span></span>View Items</button></Link> 
                    </div>
                </div>
                <div className="home-right">
                    <img src={Banner} alt="" />
                </div>
                </div>
            </div>
            {/*---------second container-------------*/}
            <div className="second-container">
                <div className="second-left-side">
                    <div className="second-left-details" data-aos="fade-up">
                        <h3>get your energy drink</h3>
                        <h1>Juice</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia recusandae neque odit tenetur eum ipsum nesciunt amet ullam deleniti excepturi iusto quas error, perspiciatis possimus eaque sequi? Est, vitae quos?</p>
                        <h4>150ml pure lemon</h4>
                        <h2>See More</h2>
                    </div>
                    <img src={Lemon} alt="" data-aos="fade-up" />
                </div>
                <div className="second-right-side">
                    <div className="second-right-details" data-aos="fade-up">
                        <h3>get your Morning drink</h3>
                        <h1>Milk</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia recusandae neque odit tenetur eum ipsum nesciunt amet ullam deleniti excepturi iusto quas error, perspiciatis possimus eaque sequi? Est, vitae quos?</p>
                        <h4>150ml Pure Milk</h4>
                        <h2>See More</h2>
                    </div>
                    <img src={Milk} alt="" data-aos="fade-up" />
                </div>
            </div>
            {/*--------special items----------
            <div className="special-item">
                <div className="special-item-left">
                    <h1>Our Special</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit ex neque, sed aperiam repudiandae. Nihil quas voluptate dolore cumque optio accusantium neque laborum, impedit quaerat voluptatibus minima dolorum nulla.
                    Hic sed incidunt voluptates, cum quam inventore dolorum aut non nemo labore tenetur debitis, perspiciatis dolor vero beatae eos. Corporis optio sit expedita voluptates eveniet impedit beatae suscipit totam natus!</p>
                </div>
                <div className="special-item-right">
                    <img src={Mission} alt="" />
                </div>
            </div>*/}
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
            {/*------------fourth container---------*/}
            <div className="fourth-container">
                <div className="fourth-container-left" data-aos="fade-up">
                   <img src={Store} alt="" />
                </div>
                <div className="fourth-container-right" data-aos="fade-up">
                    <h3>Where Do I Buy</h3>
                    <h1>Store finder</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className="fourth-bottom">
                        <input type="text" placeholder="Enter the Postcode" />
                        <button className="fourth">Find Store</button>
                    </div>
                </div>
            </div>
            {/*--------------product items---------------*/}
            <div className="product-items-full">
                <h1>Special Items</h1>
                <div className="product-items-container">
                    <div className="product-items-row" data-aos="fade-up">
                        {
                            specials.map(special =>(
                                <div className="product-items-card" key={special._id}>
                                    <img src={special.images} alt="" />
                                <div className="product-items-details">
                                        <h2>{special.title}</h2>
                                        <p>{special.description}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <Slider />
                </div>
            </div>
            {/*--------------fifth container------------*/}
            <div className="fifth-container">
                <div className="fifth-container-left" data-aos="fade-up">
                    <h3>from our blog</h3>
                    <h1>very green smooth recipe</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias illo hic quod veniam corporis ea? Ab, architecto aspernatur.</p>
                    <h2>Read More</h2>
                </div>
                <div className="fifth-container-right" data-aos="fade-up">
                    <img src={Green} alt="" />
                </div>
            </div>
            <div className="fruits">
                <div className="fruit-container">
                    <div className="fruit-row" data-aos="fade-up">
                        <div className="fruit-card">
                            <img src={Mix} alt="" />
                        </div>
                        <div className="fruit-card">
                            <img src={Banana} alt="" />
                        </div>
                    
                        <div className="fruit-card">
                            <img src={Stawbery} alt="" />
                        </div>
                    
                        <div className="fruit-card">
                            <img src={Graps} alt="" />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
