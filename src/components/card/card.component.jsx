import './card.styles.css';

const Card = ({ monster: { name, email, id } }) => (
  <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
    <p>{name}</p>
    <p>{email}</p>
  </div>
);

export default Card;
