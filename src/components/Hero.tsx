const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 hero-gradient"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Excellence in Legal Services
          </h1>
          <p className="text-xl mb-8">
            Dedicated to providing exceptional legal representation with over 22 years of experience.
          </p>
          <a
            href="#contact"
            className="inline-block bg-law-gold hover:bg-law-lightGold text-white px-8 py-3 rounded transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;