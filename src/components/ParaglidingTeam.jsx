import React from 'react';
import { Award, Clock, Users, Wind } from 'lucide-react';
import { useTranslation } from "react-i18next";

const ParaglidingTeam = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Chief Flight Instructor",
      specialty: "Thermal Flying & Advanced Techniques",
      hours: "1200+",
      experience: "15 years"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Senior Tandem Pilot",
      specialty: "First-time Flights & Safety Training",
      hours: "950+",
      experience: "12 years"
    },
    {
      name: "Elena Kowalski",
      role: "Advanced Instructor",
      specialty: "Cross-Country & Competition",
      hours: "1100+",
      experience: "14 years"
    },
    {
      name: "James Thompson",
      role: "Safety Officer & Senior Pilot",
      specialty: "Weather Analysis & Risk Management",
      hours: "1400+",
      experience: "18 years"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-tight">
            {t?.team?.title || "Meet Our Expert Team"}
          </h2>
          <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 font-light tracking-wide">
            {t?.team?.subtitle || "USHPA Certified Instructors & Tandem Pilots"}
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-4xl mx-auto">
          <div className="text-center border-r border-slate-200 last:border-r-0">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-slate-700" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">4</div>
            <div className="text-sm uppercase tracking-wider text-slate-500">Expert Pilots</div>
          </div>
          <div className="text-center border-r border-slate-200 last:border-r-0">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-slate-700" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">5000+</div>
            <div className="text-sm uppercase tracking-wider text-slate-500">Flight Hours</div>
          </div>
          <div className="text-center border-r border-slate-200 last:border-r-0">
            <div className="flex items-center justify-center mb-4">
              <Wind className="w-8 h-8 text-slate-700" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">15+</div>
            <div className="text-sm uppercase tracking-wider text-slate-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-slate-700" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">100%</div>
            <div className="text-sm uppercase tracking-wider text-slate-500">USHPA Certified</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden bg-white">
              {/* Large Image Container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-4xl font-light text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>
                
                {/* Hours badge */}
                <div className="absolute top-6 right-6 bg-white bg-opacity-95 px-4 py-2">
                  <div className="text-sm font-medium text-slate-900">{member.hours}</div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider">Hours</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 border-l border-slate-100">
                <h3 className="text-2xl font-light text-slate-900 mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-teal-700 font-medium mb-4 uppercase tracking-wider text-sm">
                  {member.role}
                </p>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  {member.specialty}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="text-slate-900 font-medium">{member.experience}</div>
                    <div className="text-slate-500 uppercase tracking-wider">Experience</div>
                  </div>
                  <div className="w-6 h-6 border border-slate-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-600"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom description */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="w-24 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            {t?.team?.description || "Our team of certified USHPA instructors brings over 15 years of combined experience and thousands of flight hours to ensure your paragliding adventure is both safe and unforgettable."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParaglidingTeam;