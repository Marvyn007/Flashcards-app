import '../App.css'
import { useState } from 'react'

const Card = ({index, question, image, answer}) => {
      const [flipped, setFlipped] = useState(false);


      return(
            <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={()=>setFlipped(!flipped)}>
                  <div className="card">
                        {index + 1}
                        <div className='front'>
                              {question}
                              {image && <img src={image} alt="card-visual" className='card-img' />}
                        </div>
                        <div className='back'>
                              {answer}
                        </div>
                  </div>
            </div>
      )
}

export default Card;