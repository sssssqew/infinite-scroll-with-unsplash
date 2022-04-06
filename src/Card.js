import './Card.css'

function Card({word_picked}){
    return (
        <div className="card-container">
          <h2>{word_picked.word}</h2>
          <h3>{word_picked.meaning}</h3>
        </div>
    )
}

export default Card
