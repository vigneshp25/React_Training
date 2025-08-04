import UnderLinedHeaddings from "./UnderLinedHeaddings"
import { educationData } from "../assets/educationData"

export default function Education() {
    return (<>
        <div className="w-full max-w-[1120px] mx-auto px-4 mt-10">
            <UnderLinedHeaddings>Education</UnderLinedHeaddings>
            <div className="flex flex-col md:flex-row gap-6">
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className="border shadow p-6 w-full md:w-1/3 bg-white"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">{item.degree}</h3>
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">{item.marks}</span>
                        </div>

                        <div className="grid grid-cols-[100px_1fr] gap-y-2 text-sm mt-5">
                            <p className="font-semibold">Year</p>
                            <p>{item.year}</p>

                            <p className="font-semibold">Institute</p>
                            <p>{item.institute}</p>

                            <p className="font-semibold">Place</p>
                            <p>{item.place}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    </>)
}