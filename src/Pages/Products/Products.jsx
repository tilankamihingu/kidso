import React, {useContext} from 'react';
import {DataContext} from '../../components/Context';
import {Link} from 'react-router-dom';
import './Products.css';

export default function Products(){
    const value = useContext(DataContext)
    const [products] = value.products
    
    return(
        <div className="product-full">
        <div className="product-container">
        <div className="product-row">
            {
                products.map(product => (
                    <div className="product-card" key={product._id}>
                        <Link to = {`/details/${product._id}`} >
                            <img src={product.images} alt="" />
                        </Link>
                        <div className="card-details">
                            <Link to = {`/details/${product._id}`}><h2>{product.title}</h2></Link>
                            <p>{product.description}</p>
                            <h3>Rs.{product.price}</h3>
                            <Link to={`/details/${product._id}`}><button className="card-btn">View</button></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
    )
}


