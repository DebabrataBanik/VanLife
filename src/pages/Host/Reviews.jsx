import { Star } from "lucide-react";
import ReviewsImg from '../../assets/images/reviews.png'

export default function Reviews() {
  return (
    <section className="reviews-container">
      <div className="title">
        <h1>Your reviews</h1>
        <p>last <span>30 days</span></p>
      </div>
      <div className="reviews-img-container">
        <img src={ReviewsImg} alt="reviews image" />
      </div>
    </section>
  )
}