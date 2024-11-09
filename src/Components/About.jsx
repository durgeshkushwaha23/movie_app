import React from 'react';

const About = () => {
  return (
    <div className=" text-white min-h-screen px-8 py-12 font-sans">
      <div className="w-full h-screen mx-auto p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-white text-center mb-10 tracking-widest">About Us</h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4 tracking-wide">Who We Are</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Founded with a vision to bring innovation and excellence, we are a passionate team dedicated to delivering world-class
            services and solutions. Our journey has been fueled by our unwavering commitment to quality, integrity, and client satisfaction.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4 tracking-wide">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We aim to revolutionize industries by empowering our clients with innovative solutions. Our mission is to blend technology
            with creativity to drive growth, inspire change, and deliver beyond expectations.
          </p>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4 tracking-wide">Our Values</h2>
          <ul className="text-gray-400 leading-relaxed text-lg space-y-2 list-disc list-inside">
            <li>Passion: Fueling progress through enthusiasm and commitment.</li>
            <li>Integrity: Building trust through transparency and honesty.</li>
            <li>Innovation: Pioneering new ideas and solutions.</li>
            <li>Excellence: Delivering outstanding quality in every aspect.</li>
            <li>Collaboration: Achieving success together with our clients and team.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold text-purple-500 mb-6 tracking-wide">Meet Our Team</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Sample Team Member */}
            <div className="w-60  p-6 rounded-lg shadow-lg">
             
              <h3 className="text-xl font-medium text-white text-center">John Doe</h3>
              <p className="text-purple-400 text-center text-sm">CEO & Founder</p>
            </div>
            {/* Repeat this block for additional team members */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
