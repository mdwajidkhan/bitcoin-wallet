import { FaWallet } from "react-icons/fa"
import { FaCompass } from "react-icons/fa"
import { FaBell } from "react-icons/fa"
import { FaGear } from "react-icons/fa"
import { AiTwotoneSetting } from "react-icons/ai"

const FooterTab = ({footerIconClick, activeFooterIcon}) => {
  return (
    <div className="footer-tab">
        <FaWallet className={(activeFooterIcon === 1) ? "footer-icon footer-icon-active" : "footer-icon"} onClick={() => footerIconClick(1)}/>
        <FaCompass className={(activeFooterIcon === 2) ? "footer-icon footer-icon-active" : "footer-icon"} onClick={() => footerIconClick(2)}/>
        <FaBell className={(activeFooterIcon === 3) ? "footer-icon footer-icon-active" : "footer-icon"} onClick={() => footerIconClick(3)}/>
        <AiTwotoneSetting className={(activeFooterIcon === 4) ? "footer-icon footer-icon-active" : "footer-icon"} onClick={() => footerIconClick(4)}/>


    </div>
  )
}

export default FooterTab