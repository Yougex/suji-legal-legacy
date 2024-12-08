interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember = ({ name, role, description }: TeamMemberProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-law-navy mb-2">{name}</h3>
      <p className="text-law-gold font-medium mb-4">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TeamMember;