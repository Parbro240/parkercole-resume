/*
  PARKER COLE PORTFOLIO CONTENT
  =============================
  This is the ONE file that controls the portfolio content.

  Recommended editing method: open portfolio-editor.html, make changes,
  then replace this file with the downloaded version.

  Images live in the images/ folder. Example path: images/putter-front.jpg
  IMPORTANT: Only publish employer content that is approved for public use.
*/

window.PORTFOLIO_DATA = {
  person: {
    name: "Parker Cole",
    title: "Mechanical and Aerospace Engineering Student",
    discipline: "Mechanical & Aerospace Engineering",
    department: "School of Mechanical and Aerospace Engineering",
    school: "Oklahoma State University",
    location: "Stillwater, Oklahoma",
    graduation: "Expected May 2028",
    gpa: "4.00 / 4.00",
    minor: "Mathematics",
    phoneDisplay: "(940) 808-2777",
    phoneLink: "+19408082777",
    email: "pacole06@icloud.com",
    linkedin: "https://www.linkedin.com/in/parker-cole-engineering",
    resumePdf: "Parker_Cole_Resume.pdf",
    resumeDocx: "Parker_Cole_Resume.docx",
    intro: "Mechanical and Aerospace Engineering student focused on design, advanced manufacturing, CAD, and hands-on prototyping.",
    about: "I am a mechanical and aerospace engineering student at Oklahoma State University with experience in advanced manufacturing engineering, CAD, rapid prototyping, and hands-on design. I enjoy taking an idea from an initial concept through modeling, fabrication, testing, and iteration, with particular interests in product design, manufacturing, and golf club development.",
    availability: "Seeking Summer 2027 engineering internship opportunities"
  },

  skills: [
    { category: "CAD", items: ["SolidWorks (CSWA)", "Creo Parametric"] },
    { category: "Manufacturing", items: ["Design for Assembly (DFA)", "Design for Manufacturability (DFM)", "Additive Manufacturing", "Rapid Prototyping", "Manual Lathe & Mill"] },
    { category: "Programming", items: ["Python"] },
    { category: "Engineering Workflow", items: ["3D Modeling", "Technical Presentations", "Engineering Drawing Review", "Microsoft Office Suite"] }
  ],

  selectedProjects: [
    {
      id: "putter-design",
      eyebrow: "PERSONAL ENGINEERING PROJECT",
      title: "Custom Golf Putter Design & Prototyping",
      shortTitle: "Custom Golf Putter",
      summary: "Iterative product-development project using SolidWorks, additive manufacturing, modular design, and physical prototyping.",
      tags: ["SolidWorks", "Product Design", "3D Printing", "DFA / DFM"],
      coverCode: "CAD / PROTOTYPE",
      coverMark: "01",
      coverImage: "",
      coverImageAlt: "",
      overview: "This ongoing personal project explores the design and prototyping of a custom mallet-style golf putter. I have developed multiple iterations in SolidWorks and used physical prototypes to evaluate geometry, mass distribution, assembly strategy, and manufacturability.",
      challenge: "Create a putter design that can be rapidly modified and physically evaluated while maintaining a practical, repeatable assembly approach.",
      approach: [
        "Created and iterated multiple mallet putter concepts in SolidWorks.",
        "Evaluated head geometry, mass distribution, assembly, and manufacturability during design iterations.",
        "Developed a modular screw-on face concept to make component changes and testing easier.",
        "Fabricated physical prototypes using additive manufacturing and molded components.",
        "Applied DFA/DFM principles when selecting fastening methods, heat-set inserts, and printable geometries."
      ],
      outcome: "The project has produced multiple functional prototypes and a repeatable design process that makes it easier to test new geometry, face concepts, and manufacturing approaches.",
      note: "This is an ongoing personal engineering project; the design continues to evolve through iterative prototyping and testing.",
      media: []
    },
    {
      id: "peterbilt-ai-tool",
      eyebrow: "PETERBILT MOTORS COMPANY",
      title: "AI-Assisted Engineering Drawing Tool",
      shortTitle: "Engineering Drawing Tool",
      summary: "Developed an AI-assisted workflow that reduced a repetitive part-drawing information task from about five minutes to about one minute per drawing.",
      tags: ["Manufacturing Engineering", "AI Workflow", "Engineering Drawings", "Process Improvement"],
      coverCode: "DRAWINGS / WORKFLOW",
      coverMark: "02",
      coverImage: "",
      coverImageAlt: "",
      overview: "During my Summer 2026 Advanced Manufacturing Engineering internship at Peterbilt Motors Company, I developed an AI-assisted tool to help locate information in engineering part drawings more efficiently.",
      challenge: "Reviewing engineering drawings for specific information could be repetitive and time consuming. The goal was to make that task faster while keeping the engineer in control of the review process.",
      approach: [
        "Identified a repetitive engineering drawing information-retrieval task that could benefit from a faster workflow.",
        "Developed an AI-assisted tool focused on locating requested information within part drawings.",
        "Iterated on the workflow with engineering use in mind rather than treating AI as a stand-alone replacement for technical review.",
        "Communicated project progress through the internship's recurring presentation process."
      ],
      outcome: "The workflow reduced the task from approximately five minutes to approximately one minute per drawing - an 80% reduction in task time.",
      note: "This case study intentionally contains only non-confidential, high-level information appropriate for a public portfolio.",
      media: []
    },
    {
      id: "peterbilt-ame",
      eyebrow: "SUMMER 2026 INTERNSHIP",
      title: "Advanced Manufacturing Engineering at Peterbilt",
      shortTitle: "Peterbilt AME Experience",
      summary: "Supported Chassis Powertrain and Cab & Outer Body engineering groups while building practical Creo, project-management, and technical-communication experience.",
      tags: ["Creo", "Advanced Manufacturing", "Cross-Functional Work", "Technical Communication"],
      coverCode: "MFG / ENGINEERING",
      coverMark: "03",
      coverImage: "",
      coverImageAlt: "",
      overview: "As an Advanced Manufacturing Engineering Intern at Peterbilt Motors Company in Denton, Texas, I supported the Chassis Powertrain and Cab & Outer Body groups across multiple engineering assignments.",
      challenge: "Contribute effectively across multiple concurrent manufacturing-engineering assignments while learning a new CAD environment and communicating progress to engineers and leadership.",
      approach: [
        "Supported the Chassis Powertrain and Cab & Outer Body groups on multiple advanced manufacturing engineering assignments.",
        "Used Creo to create and modify 3D models in a production manufacturing environment.",
        "Worked with engineers across different areas of the plant and balanced multiple projects at the same time.",
        "Presented work weekly and delivered a final presentation to Peterbilt leadership.",
        "Completed Design for Assembly training and expanded proficiency with engineering productivity tools."
      ],
      outcome: "The internship strengthened my practical CAD, manufacturing, project-management, cross-functional communication, and presentation skills in a large production environment.",
      note: "Specific employer project details and visuals will only be added when they are confirmed appropriate for public release.",
      media: []
    }
  ],

  experience: [
    {
      role: "Advanced Manufacturing Engineering Intern",
      company: "Peterbilt Motors Company",
      location: "Denton, TX",
      dates: "May 2026 - Aug 2026",
      detail: "Supported Chassis Powertrain and Cab & Outer Body engineering groups; used Creo, managed concurrent assignments, developed an AI-assisted engineering-drawing workflow, and presented work to engineering leadership."
    },
    {
      role: "Founder & President",
      company: "Cowboy Golf Club - Oklahoma State University",
      location: "Stillwater, OK",
      dates: "Aug 2026 - Present",
      detail: "Founded and lead a student golf organization, managing club structure, membership, dues, events, and competitive-group participation."
    },
    {
      role: "Member",
      company: "Cowboy Rocketworks",
      location: "Oklahoma State University",
      dates: "Feb 2025 - Present",
      detail: "Member of Oklahoma State University's student rocketry organization."
    }
  ],

  education: {
    school: "Oklahoma State University",
    department: "School of Mechanical and Aerospace Engineering",
    degree: "Bachelor of Science, Mechanical Engineering",
    minor: "Minor in Mathematics",
    graduation: "Expected May 2028",
    gpa: "4.00 / 4.00",
    honors: ["President's List", "Oklahoma State University Honors"]
  }
};
