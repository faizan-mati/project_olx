import React from 'react'
import './Footer.css'
import footerImg from '../../Images/AllCategries/footer.webp'
const Footer = () => {
    return (
        <div style={{backgroundColor:"#F8FAF9"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={footerImg} className='img-fluid' alt='' />
                    </div>
                    <div className='col-lg-4  '>
                        <div className='footerMiddle'>
                            <h3>TRY THE OLX APP</h3>
                            <h5>Buy, sell and find just about anything using the app on your mobile.</h5>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='footerMiddle'>
                            <h3>Follow Me</h3>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <a href='https://www.instagram.com/faizan_mati/' >
                                        <img src='https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-4703914-3915166.png?f=webp' alt='insta'
                                            width={30}
                                        />
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <a href='https://www.facebook.com/profile.php?id=100079673637881' >
                                        <img src='https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-4703920-3915172.png?f=webp' alt='insta'
                                            width={30}
                                        />
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <a href='https://github.com/faizan-mati' >
                                        <img src='https://w7.pngwing.com/pngs/873/246/png-transparent-linkedin-social-media-logo-social-media-logo-social-network-3d-icon-thumbnail.png' alt='insta'
                                            width={30}
                                        />
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <a href='https://github.com/faizan-mati' >
                                        <img src='https://ouch-cdn2.icons8.com/_qv0GZ-TvUNz7L6kTDY6jQTK0ZL8PBgeSRketqzOyB0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png' alt='insta'
                                            width={30}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer