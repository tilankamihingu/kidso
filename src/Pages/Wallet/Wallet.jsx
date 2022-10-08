import React, {useContext} from 'react';
import {DataContext} from '../../components/Context';
import './Wallet.css';

export default function Wallet(){
    const value = useContext(DataContext)
    const [products] = value.products
    
    return(
        <div className="certificate-full">
        <div className="certificate-container">
            <div className="certificate-heading">
                <h1>My Wallet</h1>
            </div>
        <div className="certificate-row">
            {
                products.map(product => (
                    <div className="certificate-card" key={product._id}>
                            <img src={product.images} alt="" />
                        <div className="certificate-details">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h3>{product.level}</h3>
                            <h4>Generated Code</h4>
                            <p>{product.code}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
    )
}


