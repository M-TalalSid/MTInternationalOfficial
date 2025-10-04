import TeamMember from "./team-member"

const teamMembers = [
  {
    name: "M. Talal Shoaib",
    role: "Co-Founder & CEO",
    image: "/myprofilepic.jpg",
    bio: "Visionary leader with 15+ years in software development and business strategy.",
    quote: "I believe success lies in merging vision with action — and inspiring others to do the same.",
    social: {
      linkedin: "https://www.linkedin.com/in/m-talal-shoaib/",
      twitter: "https://x.com/MTalalSid",
      github: "https://github.com/M-TalalSid",
      instagram: "https://www.instagram.com/talal_xhoaib/",
    },
  },
  {
    name: "M. Minhaj Azeem",
    role: "Co-Founder & COO",
    image: "/minhajprofilepic.webp",
    bio: "Technical expert specializing in scalable architecture and emerging technologies.",
    quote: "Great teams build great tech. I’m here to lead, learn, and level up together.",
    social: {
      linkedin: "https://www.linkedin.com/in/minhaj-azeem-35a82a213/",
      twitter: "https://x.com/minhaj_azeem",
      instagram: "https://www.instagram.com/minhajspeaks/",
    },
  },
  {
    name: "Adnan Zakaria",
    role: "CFO – Chief Financial Officer",
    image: "/mamoprofilepic.JPG", // ✅ Add actual image file
    bio: "Driving financial strategy, planning, and fiscal stability at MT International.",
    quote: "Sustainable growth starts with disciplined financial foundations.",
    social: {
      linkedin: "https://www.linkedin.com/in/adnan-zakaria", // ✅ Add real profile link
    },
  },
  {
    name: "Abdul Wahid",
    role: "CTO – Chief Technology Officer",
    image: "/wahidprofilepic.webp",
    bio: "Guiding our technical vision and driving cutting-edge solutions.",
    quote: "Every pixel should have a purpose. Design is where empathy meets innovation.",
    social: {
      linkedin: "https://www.linkedin.com/in/abdul-wahid-chohan/",
      twitter: "https://x.com/AbdulWahidChoh4",
      github: "https://github.com/abdulwahidchohan",
      instagram: "https://www.instagram.com/abdulwahidchohan138/",
    },
  },
  {
    name: "Abdul Ahad Afridi",
    role: "CPO – Chief Product Officer",
    image: "/ahadprofilepic.webp",
    bio: "Full-stack developer passionate about clean code and innovative solutions.",
    quote: "Code isn’t just logic — it’s poetry written in precision.",
    social: {
      linkedin: "https://www.linkedin.com/in/abdul-ahad-afridi-ab74b2303/",
      twitter: "https://x.com/AAhadAfridi",
      github: "https://github.com/AbdulAhadAfridi",
      instagram: "https://www.instagram.com/a.ahad_afridi/",
    },
  },
  {
    name: "Hammad Abbasi",
    role: "Head of Operations & Delivery",
    image: "/hammadprofilepic.webp",
    bio: "Ensures smooth project delivery, scalable infrastructure, and secure deployments.",
    quote: "Behind every smooth deployment is a thousand lines of invisible preparation.",
    social: {
      linkedin: "https://www.linkedin.com/in/hammad-abbasi-95388628b/",
      twitter: "https://x.com/HammadAbbasii01",
      github: "https://github.com/Muhammad-Hammad-Abbasi",
      instagram: "https://www.instagram.com/mr_hammad.abbasi/",
    },
  },
  {
    name: "Saad Darbari",
    role: "Head of Growth",
    image: "/saadprofilepic.webp",
    bio: "Focused on scaling business reach, partnerships, and market expansion.",
    quote: "A good plan today is better than a perfect plan tomorrow. Let’s execute with clarity.",
    social: {
      linkedin: "https://www.linkedin.com/in/saaddarbari/",
      twitter: "https://x.com/Saad_Darbari",
      github: "https://github.com/Saaddarbari",
      instagram: "https://www.instagram.com/saaddarbari/",
    },
  },
  {
    name: "Zain Ul Abdeen",
    role: "Head of Marketing",
    image: "/zainprofilepic.webp",
    bio: "Crafts brand narratives and drives marketing initiatives for maximum impact.",
    quote: "If you speak to everyone, you speak to no one. Precision builds powerful brands.",
    social: {
      linkedin: "https://www.linkedin.com/in/zain-ul-abideen00/",
      twitter: "https://x.com/djzain33",
      github: "https://github.com/Zain-Ul-Abideen00",
      instagram: "https://www.instagram.com/zzainu._/",
    },
  },
  {
    name: "M. Ashir Azeem",
    role: "Head of Industrial Automation",
    image: "/ashirprofilepic.JPG",
    bio: "Leading PLC, embedded, and IoT automation services for industries.",
    quote: "Innovation in automation drives efficiency and productivity for the future.",
    social: {
      linkedin: "https://www.linkedin.com/in/ashir-azeem", // ✅ Add real profile link
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 mt-[-100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">The Talented Individuals Behind Our Success</p>
        </div>

        {/* First Row - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {teamMembers.slice(0, 4).map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Second Row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamMembers.slice(4).map((member, index) => (
            <TeamMember key={member.name} member={member} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  )
}
