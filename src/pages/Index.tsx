import { Scale, Briefcase, Users, Brain, Calculator, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TeamMember from '@/components/TeamMember';
import PracticeArea from '@/components/PracticeArea';

const Index = () => {
  const team = [
    {
      name: "P. Srinivas",
      role: "Founder",
      description: "Passionate professional serving clients for 22 years in acquiring immovable property and handling complex legal matters.",
    },
    {
      name: "G. Kavitha",
      role: "Co-Founder",
      description: "Professional with 17 years of experience in family matters, specializing in marriage, guardianship, and divorce cases.",
    },
    // Add more team members as needed
  ];

  const practiceAreas = [
    { title: "Civil Law", icon: <Scale size={32} /> },
    { title: "Business Law", icon: <Briefcase size={32} /> },
    { title: "Family Law", icon: <Users size={32} /> },
    { title: "Intellectual Property", icon: <Brain size={32} /> },
    { title: "Tax Matters", icon: <Calculator size={32} /> },
    { title: "Real Estate", icon: <Home size={32} /> },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding bg-law-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practices" className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Practice Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <PracticeArea key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-law-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <address className="text-center not-italic">
              <p className="mb-4">FLAT NO.202 PADMAVATHI PLAZA,</p>
              <p className="mb-4">PLOT NO. H -18 A&B, CHITRALAYOUT,</p>
              <p className="mb-4">L B NAGAR, HYDERABAD -500074</p>
              <p>TELANGANA, INDIA</p>
            </address>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;