export default function HelloBubble() {
    function genRandomInt(max){
        return Math.floor(Math.random() * (max + 1));
    }
    const helloText = ["Hi", "Hello", "Hi there", "Greetings", "Hey"]
    return (<>
        <div className="relative inline-block bg-white border border-black rounded-md px-3 py-1 text-sm font-semibold">
            {helloText[genRandomInt(4)]}
            <div className="absolute -bottom-2 left-2 w-0 h-0 border-t-[8px] border-t-black border-x-[6px] border-x-transparent"></div>
        </div>
    </>);
}