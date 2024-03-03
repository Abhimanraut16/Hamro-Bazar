import React from 'react'
const subTitle ="Save THe Day";
const title = (
    <h2 className=''>Join on day long workshop for <b>Advance <span>Mastering</span></b> on sales</h2>
)
const desc = "Limited Time offer! Hurry Up";

function Register() {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className="container">
            <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
                <div className="col">
                    <div className="section-header">
                        <span className='subtitle'>{subTitle} </span>
                        {title}
                        {desc}
                    </div>
                </div>
                <div className="col">
                    <div className="section-wrapper">
                        <h4>Register Now</h4>
                        <form action="" className='register-form'>
                            <input type="text"name='name' placeholder='username' className='reg-input' />
                            <input type="email"name='email' placeholder='email' className='reg-input' />
                            <input type="number"name='number' placeholder='phone' className='reg-input' />
                            <button type='submit' className='lab-btn'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Register