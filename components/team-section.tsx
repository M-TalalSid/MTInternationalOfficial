import TeamMember from "./team-member"

const teamMembers = [
  {
    name: "M. Talal Shoaib",
    role: "Co-Founder & CEO",
    image: "/myprofilepic.jpg",
    bio: "A Forward-Thinking Leader skilled in Team Leadership, Sales, and Digital Marketing, Also known for building strong teams and driving business growth. As Co-Founder & CEO of MT International, he focuses on transforming ambitious ideas into impactful solutions.",
    quote: "Great leaders don’t just build companies — they build the people who build the future.",
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
    bio: "A strategic operations leader and technical innovator, Minhaj specializes in scalable architecture and emerging technologies, ensuring MT International operates with precision and impact.",
    quote: "Great teams build great tech, I’m here to lead, learn, and grow together.",
    social: {
      linkedin: "https://www.linkedin.com/in/minhaj-azeem-35a82a213/",
      twitter: "https://x.com/minhaj_azeem",
      instagram: "https://www.instagram.com/minhajspeaks/",
    },
  },
  {
    name: "Adnan Zakaria",
    role: "CFO – Chief Financial Officer",
    image: "/mamoprofilepic.JPG",
    bio: "Focused on financial strategy, planning, and sustainable growth, Adnan ensures MT International’s fiscal health remains strong and future-ready.",
    quote: "Lasting growth begins with disciplined financial foundations.",
    social: {
      linkedin: "https://www.linkedin.com/in/adnan-zakaria",
    },
  },
  {
    name: "Abdul Wahid",
    role: "CTO – Chief Technology Officer",
    image: "/wahidprofilepic.webp",
    bio: "A visionary technologist who guides MT International’s technical direction, Wahid drives innovation by blending cutting-edge solutions with user-centric design.",
    quote: "Every pixel should serve a purpose, where empathy meets innovation.",
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
    bio: "A Full-Stack product leader passionate about building innovative solutions with clean, scalable code, Ahad transforms ideas into seamless digital experiences.",
    quote: "Code isn’t just logic, it’s precision shaped into innovation.",
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
    image: "/hammadprofilepic2.jpg",
    bio: "A results-driven operations strategist, Hammad ensures smooth project delivery, scalable infrastructure, and secure deployments, empowering teams to execute flawlessly.",
    quote: "Behind every smooth launch lies countless hours of unseen preparation.",
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
    bio: "Specializing in business development, partnerships, and market expansion, Saad drives MT International’s global reach with data-driven growth strategies.",
    quote: "A clear plan today beats a perfect plan tomorrow, execution drives success.",
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
    bio: "A brand strategist and creative storyteller, Zain crafts powerful narratives and precision-driven campaigns that elevate MT International’s market presence.",
    quote: "If you try to speak to everyone, you reach no one, precision builds powerful brands.",
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
    bio: "A forward-thinking automation specialist, Ashir leads PLC, embedded systems, and IoT-driven solutions, optimizing industries for innovation and efficiency.",
    quote: "Innovation in automation turns complexity into seamless productivity.",
    social: {
      linkedin: "https://www.linkedin.com/in/ashir-azeem",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Team</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">The Talented Individuals Behind Our Success</p>
        </div>

        {/* First Row - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {teamMembers.slice(0, 9).map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
