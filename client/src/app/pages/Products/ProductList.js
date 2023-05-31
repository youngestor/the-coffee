import React, { useState, useEffect } from 'react'
import { apiProductRead } from '../../../services'
import { Link } from 'react-router-dom'
import { path } from '../../../utils'

function ProductList() {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiProductRead()
        setAllProducts(res.allProducts)
    }

    return (
        <div className='product-list-wrapper'>
            {allProducts.map((item, index) => {
                return <Link to={`${path.PRODUCTS}/${item.slug}`} state={item} key={index} className='product-item'>
                    <img src={item.image} alt='' />
                    <div className='bulletin'>
                        <div className='name'>
                            {item.name}
                        </div>
                        <div className='price'>
                            {item.price}
                        </div>
                    </div>
                </Link>
            })}
        </div>
    );
}

export default ProductList;