import UnderLinedHeaddings from "./UnderLinedHeaddings";
import WorkContent from "./WorkContent";
import { projectData } from "../assets/projectData";

export default function WorkExperience() {
    return (
        <div className="w-full max-w-[1120px] mx-auto px-4 mt-10 ">
            <UnderLinedHeaddings>Work Experience</UnderLinedHeaddings>

            {projectData.map((item, index) => (
                <div key={index} className="mb-12">
                    <div className="flex flex-col md:flex-row items-start gap-10">
                        <div className="w-full md:w-2/3">
                            <h2 className="text-4xl mb-6 mt-6 font-bold">{item.company}</h2>
                            <h3 className="text-2xl mb-6 font-bold">{item.role}</h3>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h4 className="text-xl mb-6 font-bold text-center md:text-right bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">{item.duration}</h4>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] gap-y-4 text-left">
                        <WorkContent
                            Project={item.Project}
                            Brief={item.Brief}
                            Technologies={item.Technologies}
                            ToolsAndTechnologies={item.ToolsAndTechnologies}
                            TeamSize={item.TeamSize}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
