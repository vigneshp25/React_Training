import { useState } from "react";
import CardDetails from "./Card_Details";

const Card = (props) => {
    const { linkText } = props;
    const [showmore, setShowmore] = useState('tracking-wide py-1 h-[100px]');
    return (
        <div className="flex gap-8 mx-8">
            {CardDetails.map((card, index) => {
                const { heading, image, content } = card;
                const cardLinkText = linkText[index] || "";
                return (
                    <div key={index} className="flex flex-col w-2/3">
                        <h3 className="text-xl uppercase">{heading}</h3>
                        <img src={image} alt={image} className="w-full h-[250px] py-2 flex" />
                        <p className={showmore}>{content}</p>
                        <a href="javascript:;" className="text-sm py-4 tracking-tight after:content-['_↗']" onClick={() => {
                            setShowmore('tracking-wide py-1');
                        }}>
                            {cardLinkText}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
