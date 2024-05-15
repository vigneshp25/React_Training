import CardDetails from "./Card_Details"

const Card = (props) => {
    
  return (
    <div className="flex gap-8 mx-8">
       {
        CardDetails.map((card)=>{
            const {heading, image, content} = card;
            return <div key={heading} className="flex flex-col w-2/3">
            <h3 className="text-xl uppercase">{heading}</h3>
            <img src={image} alt={image} className="w-full h-2/3 py-2" />
            <p className="tracking-wide py-1">{content}</p>
            <a href="javascript();" className="text-sm py-4 tracking-tight after:content-['_↗']">{props.linkText}</a>
        </div>
       })}
    </div>
  )
}

export default Card

