import CardDetails from "./Card_Details"

const Card = () => {
    
  return (
    <div>
       {
        CardDetails.map((card)=>{
            return <div key={card.heading}>
            <h3>{card.heading}</h3>
            <img src={card.image} alt={card.image} />
            <p>{card.content}</p>
        </div>
       })}
    </div>
  )
}

export default Card

