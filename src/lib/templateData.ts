import { PortfolioSection } from "@/pages/Editor";

export const getTemplateData = (templateId: string): PortfolioSection[] => {
  const templates: Record<string, PortfolioSection[]> = {
    "modern-engineer": [
      {
        id: "hero-1",
        type: "hero",
        order: 0,
        content: {
          title: "John Anderson",
          subtitle: "Mechanical Engineer",
          description: "Specialized in CAD design, manufacturing processes, and innovative mechanical solutions with 5+ years of experience in automotive and aerospace industries."
        }
      },
      {
        id: "about-1",
        type: "about",
        order: 1,
        content: {
          heading: "About Me",
          text: "Passionate mechanical engineer with expertise in product design, thermal systems, and mechanical analysis. I combine technical knowledge with creative problem-solving to deliver efficient and innovative engineering solutions. My experience spans from concept development to manufacturing optimization."
        }
      },
      {
        id: "projects-1",
        type: "projects",
        order: 2,
        content: {
          heading: "Featured Projects",
          projects: [
            {
              title: "Automated Assembly System",
              description: "Designed and implemented a robotic assembly line that increased production efficiency by 40%",
              tools: "SolidWorks, AutoCAD, MATLAB"
            },
            {
              title: "Heat Exchanger Optimization",
              description: "Developed an innovative heat exchanger design reducing energy consumption by 25%",
              tools: "ANSYS, CFD Analysis, Thermodynamics"
            },
            {
              title: "Precision Machining Fixture",
              description: "Created custom fixtures for CNC machining improving accuracy and reducing cycle time",
              tools: "CAM Software, GD&T, Manufacturing"
            }
          ]
        }
      },
      {
        id: "skills-1",
        type: "skills",
        order: 3,
        content: {
          heading: "Technical Skills",
          skills: [
            { name: "SolidWorks", level: 95 },
            { name: "AutoCAD", level: 90 },
            { name: "ANSYS FEA", level: 85 },
            { name: "MATLAB", level: 80 },
            { name: "Manufacturing Processes", level: 90 },
            { name: "GD&T", level: 85 }
          ]
        }
      },
      {
        id: "experience-1",
        type: "experience",
        order: 4,
        content: {
          heading: "Work Experience",
          experiences: [
            {
              title: "Senior Mechanical Engineer",
              company: "Advanced Automation Corp",
              period: "2021 - Present",
              description: "Lead design projects for automated manufacturing systems"
            },
            {
              title: "Mechanical Engineer",
              company: "Precision Engineering Ltd",
              period: "2019 - 2021",
              description: "Developed mechanical components for aerospace applications"
            }
          ]
        }
      },
      {
        id: "contact-1",
        type: "contact",
        order: 5,
        content: {
          heading: "Get in Touch",
          email: "john.anderson@example.com",
          phone: "+1 (555) 123-4567"
        }
      }
    ],
    "technical-pro": [
      {
        id: "hero-2",
        type: "hero",
        order: 0,
        content: {
          title: "Sarah Chen",
          subtitle: "Manufacturing & Design Engineer",
          description: "Expert in product development, process optimization, and quality control with proven track record in reducing costs and improving efficiency."
        }
      },
      {
        id: "about-2",
        type: "about",
        order: 1,
        content: {
          heading: "Professional Profile",
          text: "Results-driven mechanical engineer with comprehensive experience in manufacturing, design for manufacturability (DFM), and lean processes. I excel at bridging the gap between design and production, ensuring products are both innovative and cost-effective to manufacture."
        }
      },
      {
        id: "projects-2",
        type: "projects",
        order: 2,
        content: {
          heading: "Key Projects",
          projects: [
            {
              title: "Production Line Redesign",
              description: "Restructured manufacturing flow resulting in 35% throughput improvement",
              tools: "Lean Manufacturing, Value Stream Mapping"
            },
            {
              title: "Quality Control System",
              description: "Implemented automated inspection system reducing defects by 60%",
              tools: "Statistical Process Control, Six Sigma"
            }
          ]
        }
      },
      {
        id: "skills-2",
        type: "skills",
        order: 3,
        content: {
          heading: "Core Competencies",
          skills: [
            { name: "Design for Manufacturing", level: 95 },
            { name: "Lean Manufacturing", level: 90 },
            { name: "Quality Assurance", level: 88 },
            { name: "Process Engineering", level: 92 }
          ]
        }
      },
      {
        id: "contact-2",
        type: "contact",
        order: 4,
        content: {
          heading: "Contact Information",
          email: "sarah.chen@example.com",
          phone: "+1 (555) 987-6543"
        }
      }
    ],
    "innovation-focused": [
      {
        id: "hero-3",
        type: "hero",
        order: 0,
        content: {
          title: "Michael Rodriguez",
          subtitle: "R&D Mechanical Engineer",
          description: "Innovator in robotics, automation, and advanced manufacturing technologies. Passionate about pushing the boundaries of what's possible in mechanical engineering."
        }
      },
      {
        id: "about-3",
        type: "about",
        order: 1,
        content: {
          heading: "About My Work",
          text: "Forward-thinking mechanical engineer specializing in cutting-edge technologies including robotics, IoT integration, and smart manufacturing. I thrive on solving complex challenges and bringing futuristic concepts to reality through rigorous engineering principles and creative innovation."
        }
      },
      {
        id: "projects-3",
        type: "projects",
        order: 2,
        content: {
          heading: "Innovation Portfolio",
          projects: [
            {
              title: "Collaborative Robot System",
              description: "Developed safe human-robot collaboration system for assembly operations",
              tools: "ROS, Python, Mechanical Design"
            },
            {
              title: "Smart Monitoring Platform",
              description: "Created IoT-enabled predictive maintenance system for industrial equipment",
              tools: "Sensors, Data Analytics, Machine Learning"
            },
            {
              title: "Additive Manufacturing Process",
              description: "Optimized 3D printing parameters for high-strength functional parts",
              tools: "3D Printing, Material Science, Testing"
            }
          ]
        }
      },
      {
        id: "skills-3",
        type: "skills",
        order: 3,
        content: {
          heading: "Technical Expertise",
          skills: [
            { name: "Robotics & Automation", level: 92 },
            { name: "IoT Integration", level: 85 },
            { name: "Advanced Manufacturing", level: 90 },
            { name: "Python Programming", level: 82 },
            { name: "Machine Learning Applications", level: 78 }
          ]
        }
      },
      {
        id: "contact-3",
        type: "contact",
        order: 4,
        content: {
          heading: "Let's Innovate Together",
          email: "michael.rodriguez@example.com",
          phone: "+1 (555) 456-7890"
        }
      }
    ]
  };

  return templates[templateId] || templates["modern-engineer"];
};
