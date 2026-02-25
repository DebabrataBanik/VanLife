import { Link } from 'react-router'
import HeroImg from '../assets/images/about-hero.png'

export default function About() {
  return (
    <div className='about_container'>
      <div className='aboutImg_container'>
        <img src={HeroImg} alt='hero image' />
      </div>
      <div className='about-content_wrapper'>
        <div className='about-content'>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='about-cta'>
          <h2>Your destination is waiting.</h2>
          <h2>Your van is ready.</h2>
          <Link className='cta' to='/vans'>Explore our vans</Link>
        </div>
      </div>
    </div>
  )
}