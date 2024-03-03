import React from 'react'
import { Link } from 'react-router-dom';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: 'https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/12729102/pexels-photo-12729102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    }
];

function HomeCategory() {
    return (
        <div className="category-section style-4 padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className='subtitle'>{subTitle} </span>
                    <h2 className='title'>{title} </h2>

                </div>

                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {
                            categoryList.map((val, i) => (<div key={i} className='col'>
                                <Link to="/shop" className='category-item'>
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={val.imgUrl} alt="" />
                                        </div>
                                        <div className="category-content">
                                            <div className="cate-icon">
                                                <i className={`${val.iconName}`}></i>
                                            </div>
                                            <Link to="/shop"><h6>{val.title}</h6></Link>

                                        </div>
                                    </div>
                                </Link>

                            </div>))
                        }

                    </div>

                    <div className="text-center mt-5">
                        <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomeCategory