import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Bootstrap",
    "React",
    "HTML/CSS",
    "TailwindCSS",
    "Power Platform",
  ];

  const backendSkills = ["Flask", "Python", "AWS", "Azure", "Selenium"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                Passionate about learning new technologies and expanding my expertise in Kubernetes, 
                serverless computing, and cloud security to design resilient and efficient cloud solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tec. in Information Technology </strong> - Central Uniniversity of Technology, FS
                  (2008-2012)
                </li>
                <li>
                  Relevant Coursework: Software Development, Project Management, Database
                  Administration...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Quality Engineer at Standard Bank Group (April 2018 - Present){" "}
                  </h4>
                  <p>
                    Test Analysis and Execution using JIRA, Confluence and Azure Test Plans. Perform functional, regression, smoke, end-to-end, GUI and acceptance testing (Manual and Automated). 
                    -Azure Cloud Engineering – Design and implement data pipelines, ETL workflows-
                    , and data integration solutions using Azure Data Factory, Azure SQL Database, and
                    Synapse Analytics. Implement Azure DevOps Build pipelines for test automation and power apps applications. 
                    -Platform Development – Build and optimize Power Apps solutions for process automation
                    and Power BI dashboards for data visualization and reporting
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Test Automation Engineer at Command Quality (Pty) Ltd (October 2015 - March 2018){" "}
                  </h4>
                  <p>
                  Analyzing business requirements to create relevant test documents and test cases. 
                  Establishing test plans that adhere to given testing strategies and timelines. 
                  Creation and Execution of automated test frameworks. (regression, functional, integration and system tests) and reporting of test results. 
                  Test automation scripting using Java, Selenium , Spring Boot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};