import React, { useState } from 'react'
import Retting from '../Retting/Retting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: '/src/component/Assest/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: '/src/component/Assest/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Phones',
        title: 'iPhone 12',
        author: '/src/component/Assest/images/course/author/03.jpg',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'https://images.pexels.com/photos/1262692/pexels-photo-1262692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: '/src/component/Assest/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: '/src/component/Assest/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'https://images.pexels.com/photos/212236/pexels-photo-212236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: '/src/component/Assest/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: '/src/component/Assest/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: '/src/component/Assest/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
];


const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);

    const filterItem = (categoryItem)=>{
        const updateItem = ProductData.filter((curElem)=>{
            return curElem.cate === categoryItem;
        });
        setItems(updateItem);
    };

    return (
        <div className="course-section style-3 padding-tb">
            <div className="course-shape one">
                <img src="\src\component\Assest\images\shape-img\01.jpg" alt="" />
            </div>
            <div className="course-shape two">
            <img src="\src\component\Assest\images\shape-img\02.jpg" alt="" />
            </div>

            <div className="container">
                <div className="section-header">
                    <h2 className='title'>{title}</h2>
                    <div className="course-filter-group">
                        <ul className="lab-ul">
                            <li onClick={() => setItems(ProductData)}>All </li>
                            <li onClick={() => filterItem("Shoes")}>Shoes </li>
                            <li onClick={() => filterItem("Bags")}>Bags </li>
                            <li onClick={() => filterItem("Phones")}>Phones</li>
                            <li onClick={() => filterItem("Beauty")}>Beauty</li>
                        </ul>
                    </div>
                    </div>

                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                        
                            {
                                items.map((product) => <div key={product.id} className='col'>
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={product.imgUrl} alt="" />
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="#">{product.cate}</a>
                                                    </div>
                                                    <div className="course-reiew">
                                                        <Retting/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="course-content">
                                                <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                                <div className="course-footer">
                                                    <div className="course-auther">
                                                        <Link to="/" className='ca-name'>{product.brand}</Link>
                                                    </div>
                                                    <div className="course-price">
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>)
                            }
                        
                        </div>
                    </div>



               
            </div>

        </div>
    )
}

export default CategoryShowCase