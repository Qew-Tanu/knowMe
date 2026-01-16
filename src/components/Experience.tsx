import { Typography, Timeline, Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Experience = () => {
  const experiences = [
    {
      company: "Doosoft (บริษัท ดูซอฟต์ จำกัด)",
      position: "Full Stack Developer",
      period: "Feb 2024 – Present",
      projects: [
        {
          name: "Smartech Motor (Warranty System)",
          description:
            "Developed a Web Application and Line LIFF for managing electric motorcycle warranties.",
          achievements: [
            "Created a dealer portal for managing post-sale warranty information.",
            "Built a buyer-facing Line LIFF for tracking warranty status, transferring ownership, and viewing maintenance history.",
          ],
        },
        {
          name: "Mittare Insurance Platform",
          description:
            "Designed internal tools for admins, agents, and customers.",
          achievements: [
            "Developed an Admin Dashboard to manage customer profiles, sale orders, and tracking.",
            "Implemented automated Line messaging for real-time agent/customer updates.",
            "Built Line LIFF applications for agent registration, point collection, and insurance purchases.",
          ],
        },
        {
          name: "PTTOR (Internal Tracking System)",
          description:
            "Built a multi-role web platform for gas tank tracking across 6 distinct user roles.",
          achievements: [
            "Integrated web features with handheld Android scanning devices to streamline delivery, testing, and filling processes.",
          ],
        },
        {
          name: "Tech Stack",
          description:
            "I am working on various projects as Full stack developer using the following technologies:",
          achievements: [
            "Front-end : NextJs, Antd Design, Ant Design Charts, Refine (Typescript)",
            "Back-end : Nodejs, loopback 3 (Javascript)",
            "Database : PostgreSQL",
          ],
        },
      ],
    },
    {
      company: "Coursera and Westride Bootcamp",
      position: "Developer Reskilling",
      period: "Jun 2023 – Feb 2024",
      projects: [
        {
          description:
            "Completed an intensive 7-month transition program focusing on full-stack web development.",
          achievements: [],
        },
      ],
    },
    {
      company: "SCG Packaging",
      position: "Project Engineer",
      period: "Jun 2016 – Oct 2023",
      projects: [
        {
          description:
            "Managed end-to-end project integration and control, ensuring seamless coordination and timely completion.",
          achievements: [
            "Specialized in mechanical piping and machine design, collaborating with civil teams on foundational construction.",
          ],
        },
      ],
    },
    {
      company: "Thai Takasago",
      position: "Design Engineer",
      period: "Oct 2014 – Apr 2016",
      projects: [
        {
          description:
            "Designed and controlled utility piping systems (Steam, Air, Exhaust, etc.) for factories.",
          achievements: [],
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{ padding: "80px 24px", background: "#f5f5f5" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "48px",
            fontSize: "36px",
          }}
        >
          Work Experience
        </Title>
        <Timeline mode="left">
          {experiences.map((exp, index) => (
            <Timeline.Item
              key={index}
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              color="blue"
            >
              <Card
                title={
                  <div>
                    <Text strong style={{ fontSize: "20px", color: "#1890ff" }}>
                      {exp.company}
                    </Text>
                    <br />
                    <Text style={{ fontSize: "16px" }}>{exp.position}</Text>
                    <br />
                    <Text type="secondary">{exp.period}</Text>
                  </div>
                }
                bordered={false}
                style={{ marginBottom: "16px" }}
              >
                {exp.projects.map((project, pIndex) => (
                  <div key={pIndex} style={{ marginBottom: "16px" }}>
                    {"name" in project && project.name && (
                      <Title level={5} style={{ marginBottom: "8px" }}>
                        {project.name}
                      </Title>
                    )}
                    <Paragraph style={{ marginBottom: "8px" }}>
                      {project.description}
                    </Paragraph>
                    {project.achievements.length > 0 && (
                      <ul style={{ paddingLeft: "20px" }}>
                        {project.achievements.map((achievement, aIndex) => (
                          <li key={aIndex}>
                            <Text type="secondary">{achievement}</Text>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
