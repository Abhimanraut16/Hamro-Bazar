import React from 'react'
import { Link } from 'react-router-dom';
import img from '../Assest/images/app/01.jpg'
import imgUrl from '../Assest/images/app/02.jpg'
const btnText = "Sign up for free";
const title = "Shop Anytime, Anywhere"
const desc = "Take shop on your any device with our app & learn all time what you want. just download & install & start to learn"

function Appsection() {
    return (
        <div className="app-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
                    <h2 className='title'>{title}</h2>
                    <p>{desc}</p>

                </div>

                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li><a href="#">
                            <img src={img} alt="" />
                            </a></li>
                        <li><a href="#">
                            <img src={imgUrl} alt="" />
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Appsection