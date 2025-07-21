const experiences = [
  {
    role: "Front End Developer",
    period: "Nov. 2024 – Jan 2025",
    company: "Valueklip",
    details: [
      "Design, build, test, and maintain a user-friendly website by using best practices in web development, security, and data protection.",
      "Evaluate code to ensure it is valid, properly structured, efficient, reusable, maintainable.",
      "Optimize the website for maximum speed, performance, and scalability.",
      "Ensure seamless integration of APIs with back-end services and databases.",
      "Collaborate with the product manager and client to understand requirements and provide technical solutions.",
    ],
  },
  {
    role: "Teaching Assistant",
    period: "April. 2025 – Present",
    company: "Massachusetts Institute of Technology’s (MIT)",
    details: [
      "Selected by the AUC as their representative TA for a joint program with MIT, providing instructional support and guidance to Gaza students in Egypt in a Python coding course.",
      "Facilitating problem-solving by assisting students in understanding complex programming concepts and troubleshooting code errors, promoting critical thinking and independent learning.",
      "Contributing to course improvement by actively participating in discussions and providing feedback on course materials, enhancing the overall learning experience.",
      "Assisting with grading assignments, quizzes, and projects, ensuring fair and timely evaluation of student work while providing constructive feedback to promote improvement.",
    ],
  },
];

function Experince() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-8">
          Experience
        </h2>
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-lg w-full">
            <h3 className="text-xl font-semibold text-black mb-2">
              {exp.role}
            </h3>
            <div className="font-bold text-blue-500 mb-1">{exp.company}</div>
            <div className="text-gray-400 mb-4">{exp.period}</div>
            <ul className="list-disc pl-5 space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-gray-600">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experince;
