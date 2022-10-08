import React,{ useContext } from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {DataContext} from '../../components/Context';
import './Details.css';

export default function Details(){
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    

    const details = products.filter((product, index) =>{
        return product._id === id
    })

    
    
    return(
        <>
        <div className="item-details">
            {
                details.map(product =>(
                    <div className="item-detail-container" key={product._id}>
                        <div className="detail-row">
                            <div className="detail-col">
                                <img src={product.images} alt="" />
                            </div>
                            <div className="detail-col">
                                <h1>{product.title}</h1>
                                <p className="desc-detail">{product.note}</p>
                                <h4>{product.level}</h4>
                                <h3>{product.date}</h3>
                                <p>{product.description}</p>
                                <Link to={`/details/${product._id}`}><button className="certificate-detail-btn">Upload Now</button></Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
            
        </>
    )
}