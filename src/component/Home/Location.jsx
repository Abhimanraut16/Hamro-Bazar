import React from 'react'
import { Link } from 'react-router-dom';

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: '/src/component/Assest/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/component/Assest/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/component/Assest/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/component/Assest/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/component/Assest/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/component/Assest/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/component/Assest/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]

function Location() {
    return (
        <div className="clients-section style-2 padding-tb ">
            <div className="container">
                <div className="section-header text-center">
                    <h1 className='title'>{title}</h1>
                    <p>{desc}</p>

                </div>

                <div className="section-wrapper bg-secondary rounded-5">
                    <div className="clients bg-secondary">
                        {
                            clientsList.map((val, i) =>
                                <div key={i} className="client-list">
                                    <Link to="/sign-up" className='client-content'>
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className="client-thumb">
                                        <img src={val.imgUrl} alt="" />
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Location