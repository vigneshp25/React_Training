export default function UnderLinedHeaddings({ children }) {
    return (<>
        <div className="relative inline-block mb-6">
            <h3 className="text-2xl font-bold">{children}</h3>
            {/*<div className="h-[3px] bg-black mt-1 w-1/2"></div> */}
            <div className="h-[3px] bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 mt-1 w-2/3"></div>

        </div>
    </>)
}