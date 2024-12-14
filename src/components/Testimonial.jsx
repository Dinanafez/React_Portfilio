import React from "react";
import "./Testimonial.css"; // Assuming styles are moved to a separate CSS file
import useTestimonials from "../hooks/useTestimonials"; // استيراد الـ Hook المخصص

const Testimonial = () => {
  const testimonials = useTestimonials(); // استدعاء الـ Hook لجلب البيانات

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              <p className="quote">{testimonial.quote}</p>
              <div className="author">- {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
