export default function WorkContent({ Project, Brief, Technologies, ToolsAndTechnologies, TeamSize }) {
    return (
        <div className="grid md:grid-cols-[auto_1fr] grid-cols-1 gap-y-4 md:gap-x-12 text-left">

            <p className="font-semibold pr-8">Project:</p>
            <p className="font-bold">{Project}</p>

            <p className="font-semibold pr-8">Brief:</p>
            <div className="space-y-2 text-justify">{Brief}</div>

            <p className="font-semibold pr-8">Technologies:</p>
            <p className="space-y-2 text-justify">{Technologies}</p>

            <p className="font-semibold pr-8">Tools & Technologies:</p>
            <p className="space-y-2 text-justify">{ToolsAndTechnologies}</p>

            <p className="font-semibold pr-8">Team Size:</p>
            <p className="space-y-2 text-justify">{TeamSize}</p>

        </div>
    );
}
