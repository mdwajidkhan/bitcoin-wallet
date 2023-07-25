import { useState } from 'react';
import { SiBitcoinsv } from 'react-icons/si';
import { IoIosArrowBack } from 'react-icons/io';

const BitcoinsAvailable = ({downBtn, openTabs}) => {
    const [totalBitcoins, setTotalBitcoins] = useState(3.529021)
    const [totalMoney, setTotalMoney] = useState(19.153)
    const [proftLoss, setProfitLoss] = useState(2.32)

  return (
    <div className='bitcoins-available'>
        <div className="bitcoin-header">
            <div className="bitcoin-img">
                <SiBitcoinsv style={{ fontSize: '2.8rem', marginRight: '0.3em', color: '#FD951F'}}/> <span style={{color: '#3A4554'}}>Bitcoin</span>
            </div>
            <span style={{color: '#9FAAB7'}}>BTC</span>
        </div>
        <div className="total-bitcoins-available">
            {totalBitcoins} <span>BTC</span>
        </div>
        <div className='money-section'>
            <div className="total-money">${totalMoney} <span>USD</span></div>
            <div className="profit-loss-percent">-{proftLoss}%</div>
        </div>
        <IoIosArrowBack className={openTabs ? 'down-btn down-btn-up' : 'down-btn'} onClick={downBtn}/>
    </div>
  )
}

export default BitcoinsAvailable