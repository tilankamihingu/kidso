import React, {useContext} from 'react';
import {DataContext} from '../../components/Context';
import {Link} from 'react-router-dom';
import './Products.css';
import Back from '../../images/learn.jpg';

export default function Products(){
    const value = useContext(DataContext)
    const [products] = value.products
    
    return(
        <div className="certificate-full">
            <div className="bg-image">
                
            </div>
    
        <div className="certificate-container">
            <div className="certificate-heading">
                <h1>certificates</h1>
            </div>
        <div className="certificate-row">
            {
                products.map(product => (
                    <div className="certificate-card" key={product._id}>
                        <Link to = {`/details/${product._id}`} >
                            <img src={product.images} alt="" />
                        </Link>
                        <div className="certificate-details">
                            <div className="product-details-content">
                            <Link to = {`/details/${product._id}`}><h2>{product.title}</h2></Link>
                            <p>{product.description}</p>
                            <h3>{product.level}</h3>
                            </div>
                            
                            <Link to={`/details/${product._id}`}><button className="certificate-btn">View</button></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
    )
}


