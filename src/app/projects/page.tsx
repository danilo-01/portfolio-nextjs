"use client";

import { v4 } from "uuid";
import CaretUp from "../../../public/caret-up.svg";
import CaretDown from "../../../public/caret-down.svg";
import GithubIcon from "../../../public/icons8-github.svg";
import { useState } from "react";

const projectData = [
  {
    projectTitle: "Apple - Workforce Management Tool",
    timeWorked: "Apr. 2022  -  Current",
    description: `Developed and maintained high-performance, responsive web applications using React.js, TypeScript, and Express.js, with expertise in both front-end and back-end development to ensure seamless user experiences. Collaborated closely with cross-functional teams, including designers and product managers, to translate business requirements into technical specifications within Agile frameworks. Optimized web performance through techniques like lazy loading, code splitting, and server-side rendering (SSR), resulting in faster page load times and enhanced application responsiveness. Integrated RESTful APIs and third-party services to ensure secure and efficient data exchange. Additionally, designed and optimized PostgreSQL databases to support complex application features and maintain data integrity.`,
  },
  {
    projectTitle: "Personal - Not so profitable trading bot",
    timeWorked: "Aug 2024 - current",
    description: `This project is a work-in-progress trading bot that automates stock trading using predefined criteria. Built with the Alpaca API and Polygon's API, the bot filters stocks based on factors such as relative volume, percentage increase, and market news. It aims to identify potential trading opportunities within a specific price range and limited shares available for trading. Although the bot's performance might not lead to significant profits (hence the name), it's a valuable experiment in algorithmic trading, data analysis, and API integration.`,
    githubUrl: "https://github.com/danilo-01/not-so-profitable-trading-bot",
  },
];

export default function Projects() {
  const [toggledProject, setToggledProject] = useState<string | null>(null);
  return (
    <div className="content-wrapper flex justify-start flex-col">
      <h1 className="text-5xl">
        <strong>DEV PROJECTS</strong>
      </h1>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae?
        Veniam molestiae excepturi officia libero veritatis quod ipsum, neque ad
        necessitatibus quasi tempora, eveniet voluptatum. Quasi obcaecati
        nostrum ipsam vel.
      </p>
      {/* Projects wrapper */}
      <div className="mt-10">
        {projectData.map((projectDataValue) => {
          return (
            <div key={v4()} className="mb-6">
              {/* Title and time worked wrapper */}
              <div
                className="flex justify-start items-center mb-6 cursor-pointer select-none"
                onClick={() =>
                  toggledProject === projectDataValue.projectTitle
                    ? setToggledProject(null)
                    : setToggledProject(projectDataValue.projectTitle)
                }
              >
                {toggledProject === projectDataValue.projectTitle ? (
                  <CaretUp />
                ) : (
                  <CaretDown />
                )}
                {/* Title */}
                <h2 className="text-2xl font-bold ml-5">
                  {projectDataValue.projectTitle}
                </h2>
                <h2 className="ml-4">{projectDataValue.timeWorked}</h2>
              </div>
              {toggledProject === projectDataValue.projectTitle && (
                <div className="w-1/2 flex-col flex">
                  <p>{projectDataValue.description}</p>

                  {projectDataValue.githubUrl && (
                    <a
                      href={projectDataValue.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="py-2 bg-acc-2 mt-4 rounded-md px-4 flex justify-start items-center w-fit">
                        <GithubIcon />
                        <p className="ml-4 text-prim-2 font-bold ">
                          View on Github
                        </p>
                      </button>
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
