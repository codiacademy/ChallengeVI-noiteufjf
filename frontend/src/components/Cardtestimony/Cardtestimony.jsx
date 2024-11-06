import './cardtestimony.css';
import { Star } from 'lucide-react';
export default function Cardtestimony({
  paragraph,
  name,
  office,
  enterprise,
  image,
}) {
  return (
    <div id="cardtestimony">
      <div className="flex mb-2">
        <Star color="#FFD700" />
        <Star color="#FFD700" />
        <Star color="#FFD700" />
        <Star color="#FFD700" />
        <Star color="#FFD700" />
      </div>
      <p id="testimony-paragraph">{paragraph}</p>
      <div id="client">
        <div id="client-img">
          <img src={image} alt="Avatar de Avaliadores" />
        </div>
        <div>
          <h3>{name}</h3>
          <span>
            {office}, {enterprise}
          </span>
        </div>
      </div>
    </div>
  );
}
