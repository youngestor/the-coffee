import React, { useState, useEffect } from 'react'
import { apiProductRead } from '../../../services'

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
                return <div key={index} className='product-item'>
                    <img src={item.image} alt='' />
                    <div className='bulletin'>
                        <div className='name'>
                            {item.name}
                        </div>
                        <div className='price'>
                            {item.price}
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
}

export default ProductList;