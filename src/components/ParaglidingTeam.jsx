import React from 'react';
import { Award, Clock, Users, Wind } from 'lucide-react';
import { useTranslation } from "react-i18next";

const ParaglidingTeam = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Abde Errahime",
      role: "Chief Flight Instructor",
      specialty: "Advanced Flying",
      hours: "15000+",
      experience: "20 years",
      img: "images/team/Abderrahim.jpeg"
    },
    {
      name: "Hassan", 
      role: "Chief Flight Instructor",
      specialty: "First-time Flights & Advanced Flying",
      hours: "10000+",
      experience: "15 years",
      img: "images/team/hassan.jpeg"
    },
    {
      name: "ElHadj",
      role: "Advanced Instructor",
      specialty: "Senior Pilot",
      hours: "6000+",
      experience: "6 years",
      img: "images/team/ELhadj.jpeg"
    },
    {
      name: "Said",
      role: "Advanced Instructor",
      specialty: "Senior Pilot",
      hours: "4000+",
      experience: "5 years",
      img: "images/team/Said.jpeg"
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
            <div className="text-3xl font-light text-slate-900 mb-2">9000+</div>
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
                <div className="absolute inset-0">
                  <img src={member.img} className='w-full h-full object-cover' alt="" />
                </div>
                
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