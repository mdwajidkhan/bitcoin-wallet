import { AiFillDollarCircle } from 'react-icons/ai';

const Card = ({text, color}) => {
  return (
    <div className='card' style={{fontSize: '1.2rem'}}>
        <AiFillDollarCircle style={{fontSize: '3rem', color: color, marginBottom: '0.2em'}}/>
        <span style={{color: 'color'}}>{text}</span>
    </div>
  )
}

export default Card