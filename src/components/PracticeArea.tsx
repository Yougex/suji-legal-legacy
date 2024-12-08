interface PracticeAreaProps {
  title: string;
  icon: React.ReactNode;
}

const PracticeArea = ({ title, icon }: PracticeAreaProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="text-law-gold mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-law-navy">{title}</h3>
    </div>
  );
};

export default PracticeArea;