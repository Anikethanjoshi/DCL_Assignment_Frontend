
import {
  FaPlay,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAmazon,
  FaGoogle,
  FaFacebook,
  FaApple,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiFlipkart,
  SiTcs,
  SiJio,
} from "react-icons/si";

function Home() {
  return (
    <div className="font-[Poppins] bg-[#f4f7fb] text-gray-900 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex flex-col lg:flex-row justify-between items-center gap-[70px] px-[8%] py-[120px] text-white bg-[linear-gradient(135deg,#0f172a,#1e293b)]">

        {/* Glow */}
        <div className="absolute top-[-150px] right-[-120px] w-[450px] h-[450px] rounded-full bg-white/5 blur-[10px]" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_30%)]" />

        {/* LEFT */}
        <div className="flex-1 relative z-10 text-center lg:text-left">

          <h1 className="text-[38px] md:text-[52px] lg:text-[68px] leading-[1.15] font-extrabold mb-7">
            Premium, Structured Courses for
            <span className="text-blue-400"> Tech Career</span>
          </h1>

          <p className="text-[16px] lg:text-[19px] leading-[1.9] text-gray-300 mb-10 max-w-[620px] mx-auto lg:mx-0">
            Join 1,25,000+ successful students who have transformed their lives
            with us.
          </p>

          {/* FORM */}
          <form className="flex flex-col gap-[18px] max-w-[430px] mx-auto lg:mx-0">

            <input
              type="text"
              placeholder="Full Name*"
              className="px-[18px] py-[18px] rounded-[14px] border border-white/15 bg-white/10 backdrop-blur-[10px] text-white outline-none text-[15px] placeholder:text-gray-300 focus:border-blue-400 focus:bg-white/15 transition duration-300"
            />

            <input
              type="email"
              placeholder="Email Address*"
              className="px-[18px] py-[18px] rounded-[14px] border border-white/15 bg-white/10 backdrop-blur-[10px] text-white outline-none text-[15px] placeholder:text-gray-300 focus:border-blue-400 focus:bg-white/15 transition duration-300"
            />

            <input
              type="text"
              placeholder="Contact Number*"
              className="px-[18px] py-[18px] rounded-[14px] border border-white/15 bg-white/10 backdrop-blur-[10px] text-white outline-none text-[15px] placeholder:text-gray-300 focus:border-blue-400 focus:bg-white/15 transition duration-300"
            />

            <button
              type="submit"
              className="px-[18px] py-[18px] rounded-[14px] bg-blue-600 hover:bg-blue-700 text-white text-[16px] font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(37,99,235,0.4)]"
            >
              Submit Now
            </button>

          </form>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center items-center relative z-10">

          <button className="w-[105px] h-[105px] md:w-[150px] md:h-[150px] rounded-full bg-white text-blue-600 text-[26px] md:text-[38px] shadow-[0_20px_45px_rgba(0,0,0,0.25)] transition duration-300 hover:scale-110 hover:rotate-6 flex items-center justify-center">
            <FaPlay />
          </button>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-[8%] py-[100px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7">

        {[
          "Interviews Guaranteed",
          "Course (We Write & Give)",
          "End to End Project/Product",
          "Life Cycle Exposure",
          "Technology Simplified (From SCRATCH to HOT Project)",
          "6 Months of Extensive Bootcamp Training",
          "Learn from IISc, IIT, & MAANG Faculties",
          "1,25,000+ Successful Students",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-[35px] rounded-[22px] text-center leading-[1.8] font-semibold border border-[#eef2ff] shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-2"
          >
            {item}
          </div>
        ))}

      </section>

      {/* SUCCESS SECTION */}
      <section className="px-[8%] py-[110px]">

        <h2 className="text-center text-[34px] md:text-[48px] font-extrabold text-slate-900 mb-[18px]">
          Success Journey
        </h2>

        <p className="text-center text-gray-500 text-[18px] mb-[55px]">
          Many students have transformed to tech career.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">

          {[
            {
              name: "Tanmai N",
              role: "Software Engineer",
              stack: "Java Fullstack",
              ctc: "₹13.6 LPA",
              year: "2025",
            },
            {
              name: "Arpitha P",
              role: "Tech Intern",
              stack: "Java Full Stack",
              ctc: "₹12 LPA",
              year: "2025",
            },
            {
              name: "V. Srija",
              role: "Associate Software Engineer",
              stack: "Java Fullstack",
              ctc: "₹10 LPA",
              year: "2025",
            },
          ].map((student, index) => (
            <div
              key={index}
              className="bg-white p-[38px] rounded-[24px] shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2"
            >

              <h3 className="text-[28px] font-bold mb-2">
                {student.name}
              </h3>

              <h4 className="text-blue-600 mb-4 font-semibold">
                {student.role}
              </h4>

              <p className="text-gray-600 leading-[1.9] mb-6">
                Dhee Coding Lab helped students build strong software
                development careers through practical training and mentorship.
              </p>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Stack:</strong> {student.stack}
                </p>

                <p>
                  <strong>CTC:</strong> {student.ctc}
                </p>

                <p>
                  <strong>Passing Year:</strong> {student.year}
                </p>
              </div>

              <button className="mt-7 px-7 py-3 rounded-[12px] bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 hover:-translate-y-1">
                Watch Testimonial
              </button>

            </div>
          ))}

        </div>

        <button className="block mx-auto mt-[55px] px-8 py-4 rounded-[12px] bg-slate-900 hover:bg-slate-800 text-white font-semibold transition duration-300">
          See More Stories →
        </button>

      </section>

      {/* ABOUT */}
      <section className="px-[8%] py-[110px] grid lg:grid-cols-2 gap-10">

        {[
          {
            title: "What you get?",
            items: [
              "BEST technology training in India.",
              "100% INTERVIEW GUARANTEE",
              "6 months of bootcamp training.",
              "Internship with development exposure.",
              "Complete Product development exposure.",
            ],
          },
          {
            title: "Who we are?",
            items: [
              "Passionate IT professionals.",
              "Building SKILLED INDIA.",
              "10+ years IT experience.",
              "Mentors from IISc & IIM.",
              "Teachers who trained 3.5+ lakhs students.",
            ],
          },
        ].map((section, index) => (
          <div key={index}>

            <h2 className="text-[34px] md:text-[48px] font-extrabold text-slate-900 mb-10">
              {section.title}
            </h2>

            <ul className="flex flex-col gap-6">

              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="list-none bg-white p-6 rounded-[18px] shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition duration-300 hover:translate-x-2 hover:border-l-[5px] hover:border-blue-600"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </section>

      {/* COMPANIES */}
      <section className="px-[8%] py-[110px] bg-[linear-gradient(to_bottom,#ffffff,#f8fafc)]">

        <h2 className="text-center text-[34px] md:text-[48px] font-extrabold text-slate-900 mb-[60px]">
          Our students work at
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-7">

          {[
            <FaAmazon />,
            <FaGoogle />,
            <FaFacebook />,
            <FaApple />,
            <SiTcs />,
            <FaMicrosoft />,
            <SiFlipkart />,
            <SiJio />,
          ].map((icon, index) => (
            <div
              key={index}
              className="h-[140px] bg-white rounded-[24px] border border-gray-200 flex items-center justify-center text-[58px] text-slate-700 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:scale-105 hover:text-blue-600 hover:border-blue-600"
            >
              {icon}
            </div>
          ))}

        </div>

      </section>

      {/* COURSES */}
      <section className="px-[8%] py-[110px]">

        <h2 className="text-center text-[34px] md:text-[48px] font-extrabold mb-[60px]">
          Career Transformation Courses
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">

          {[
            "Java Full stack with Cloud & Devops",
            "Python with Data Science",
            "Python Full Stack with GenAi",
            "MERN Full stack with cloud & DevOps",
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white p-[38px] rounded-[24px] shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2"
            >

              <h3 className="text-[28px] font-bold mb-4">
                {course}
              </h3>

              <p className="text-gray-600 leading-[1.9] mb-3">
                Industry focused curriculum with real-time projects.
              </p>

              <p className="mb-2">
                <strong>Duration:</strong> 300+ Hours
              </p>

              <p>
                <strong>Package:</strong> 3 - 15 LPA
              </p>

              <button className="mt-7 px-7 py-3 rounded-[12px] bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 hover:-translate-y-1">
                Explore More
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* CALLBACK */}
      <section className="px-[8%] py-[110px] text-center text-white bg-[linear-gradient(135deg,#0f172a,#1e3a8a)]">

        <h2 className="text-[34px] md:text-[48px] font-extrabold mb-5">
          Still have questions?
        </h2>

        <p className="text-gray-300 text-[18px] mb-10">
          Request a callback to get personalized guidance.
        </p>

        <button className="px-8 py-4 rounded-[12px] bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 hover:-translate-y-1">
          Request A Call Back
        </button>

      </section>

      {/* TEAM */}
      <section className="px-[8%] py-[110px]">

        <h2 className="text-center text-[34px] md:text-[48px] font-extrabold mb-[60px]">
          Team members & mentors
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">

          {[
            {
              name: "Shishira Bhat",
              role: "Founder & CEO",
            },
            {
              name: "Suraj Vijay Shetty",
              role: "Co-Founder & Director",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-[38px] rounded-[24px] text-center shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2"
            >

              <h3 className="text-[28px] font-bold mb-3">
                {member.name}
              </h3>

              <p className="text-blue-600 font-semibold">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white px-[8%] py-[90px] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">

        {[
          {
            title: "Yelahanka Office",
            phone: "+91 9071010044",
          },
          {
            title: "BTM Office",
            phone: "+91 8904080070",
          },
          {
            title: "Rajajinagar Office",
            phone: "+91 8861908889",
          },
        ].map((office, index) => (
          <div key={index}>

            <h3 className="text-[24px] font-bold mb-5">
              {office.title}
            </h3>

            <p className="flex items-start gap-3 text-gray-300 leading-[1.9] mb-4">
              <FaMapMarkerAlt className="mt-1 text-blue-500" />
              Bengaluru, Karnataka
            </p>

            <p className="flex items-center gap-3 text-gray-300">
              <FaPhoneAlt className="text-blue-500" />
              {office.phone}
            </p>

          </div>
        ))}

        <div>

          <h3 className="text-[24px] font-bold mb-5">
            Contact
          </h3>

          <p className="flex items-center gap-3 text-gray-300 mb-4">
            <FaPhoneAlt className="text-blue-500" />
            +91 9071010011
          </p>

          <p className="flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-blue-500" />
            info@dheecodinglab.com
          </p>

        </div>

      </footer>

      {/* COPYRIGHT */}
      <div className="bg-[#0b1120] border-t border-gray-700 py-6 text-center text-slate-300 px-4">
        Copyright © 2026 Dhee Coding Lab - A unit of Prodhee Technologies Pvt
        Ltd. | All Rights Reserved.
      </div>

    </div>
  );
}

export default Home;