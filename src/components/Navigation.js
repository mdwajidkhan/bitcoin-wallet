import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { IoMdRemoveCircleOutline } from 'react-icons/io';



const Navigation = () => {
  return (
    <nav className="nav">
        <ul>
            <li>Edit <AiOutlineEdit/></li>
            <li>Courier Info <AiOutlineInfoCircle/></li>
            <li>Share <AiOutlineShareAlt/></li>
            <li>Remove <IoMdRemoveCircleOutline/></li>
        </ul>
    </nav>
  )
}

export default Navigation