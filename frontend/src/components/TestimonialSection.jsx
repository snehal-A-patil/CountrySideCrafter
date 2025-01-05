import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Customer',
      feedback: 'The pottery set I bought was amazing! It’s beautifully crafted and a great addition to my home decor.',
      image: '/path/to/testimonial1.jpg', // Replace with an actual image path
    },
    {
      name: 'Jane Smith',
      role: 'Customer',
      feedback: 'I love the woolen throws! They are warm, cozy, and the craftsmanship is top-notch.',
      image: '/path/to/testimonial2.jpg',
    },
    {
      name: 'Sam Johnson',
      role: 'Customer',
      feedback: 'The eco-friendly baskets are perfect for organizing my space. I love knowing that I’m supporting artisans.',
      image: '/path/to/testimonial3.jpg',
    },
    // Add more testimonials if needed
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primaryText">What Our Customers Say</h2>
        <p className="mt-4 text-lg text-secondaryText">Hear from people who’ve experienced the quality of our products.</p>
      </div>
      
      {/* Horizontal scrolling container */}
      <div className="mt-10 px-4 overflow-x-auto">
        <div className="flex space-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-8 rounded-lg shadow-lg text-center min-w-[300px]">
              
              <p className="text-lg text-primaryText italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-md text-secondaryText">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
