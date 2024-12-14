import { useState, useEffect } from "react";

const useTestimonials = () => {
  // البيانات الافتراضية للشهادات
  const [testimonials, setTestimonials] = useState([
    { id: 1, quote: "This service is amazing! Highly recommend to everyone.", author: "John Doe" },
    { id: 2, quote: "Exceptional quality and support. Five stars!", author: "Sarah Lee" },
    { id: 3, quote: "A truly fantastic experience. Will come back again.", author: "Ahmed Ali" }
  ]);

  // يمكننا استخدام تأثير جانبي إذا كنا نحصل على البيانات من API
  useEffect(() => {
    // لو كان هناك API يمكن استدعاؤه هنا، مثل:
    // fetch("API_URL").then(response => response.json()).then(data => setTestimonials(data));
    console.log("Testimonials are loaded!");
  }, []); // يتم تشغيله مرة واحدة عند التحميل

  return testimonials;
};

export default useTestimonials;
