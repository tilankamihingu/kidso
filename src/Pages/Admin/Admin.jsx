import React, {useContext} from 'react';
import {DataContext} from '../../components/Context'
import './Admin.css';

const Admin = () => {
    const value = useContext(DataContext)
    const [products] = value.products
    return (
        <div className="admin">
            <div className="admin-table">
            <table>
                <caption>All Products</caption>
                <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>view</th>
                    <th>Update</th>
                    <th>delete</th>
                </tr>
                {
                    products.map(product =>(
                        <tr>
                    <td>{product._id}</td>
                    <td><img src={product.images} alt="" /></td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <th><button className="ad-view">view</button></th>
                    <th><button className="ad-up">update</button></th>
                    <th><button className="ad-del">delete</button></th>
                </tr>
                    ))
                }
            </table>
            </div>
        </div>
    )
}

export default Admin
