import React from 'react'
import img1 from '../../ASSETS/Images/product-1.jpg'
import img2 from '../../ASSETS/Images/product-2.jpg'
import img3 from '../../ASSETS/Images/product-3.jpg'
import img4 from '../../ASSETS/Images/product-4.jpg'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img2,
            categoryname: 'Vegetable'
        },
        {
            id: 2,
            categoryimage: img3,
            categoryname: 'Fruits'
        },
        {
            id: 3,
            categoryimage: img4,
            categoryname: 'Rare/Others'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar