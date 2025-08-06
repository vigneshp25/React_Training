import UnderLinedHeaddings from "./UnderLinedHeaddings"
import { hobbiesData } from "../assets/hobbiesData"

export default function Hobbies() {
    return (
        <div className="w-full max-w-[1120px] mx-auto px-4 mt-10 mb-50">
            <UnderLinedHeaddings>Hobbies and Interests</UnderLinedHeaddings>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-6 mt-10">
                {hobbiesData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 mb-2 text-black">
                            {item.icon}
                        </div>
                        <p className="text-sm font-semibold uppercase">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
