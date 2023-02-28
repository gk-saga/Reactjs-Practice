import React from 'react'
import '../header/Header.css'
import front_img  from '../../assets/front-img.png'
const Banner = () => {
  return (
    <div className='banner-sec'>
        <div className='container py-5'>
            <div className='row'>
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 text-left" data-aos="fade-up" data-aos-delay="200">
            <h1>Better Solutions For Your Business</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
          <div class="d-flex justify-content-center justify-content-lg-start mt-3">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="btn btn-default btn-primary glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
                <div className='col-lg-6'>
                <img src={front_img} className="img-fluid animated" alt="logo" />
                </div>
            </div>
        </div>
    </div>
  )
} 
export default Banner