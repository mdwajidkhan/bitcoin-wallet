import { useState, useEffect } from "react"
import Header from "./components/Header"
import FooterTab from "./components/FooterTab"
import NothingToShow from "./components/NothingToShow"
import Wallet from "./components/Wallet"

const App = () => {
  const [openTabs, setOpenTabs] = useState(false)
  const [chartData, setChartData] = useState([])
  const [interval, setInterval] = useState(365);
  const [higher, setHigher] = useState(0)
  const [lower, setLower] = useState(0)
  const [activeFooterIcon, setActiveFooterIcon] = useState(1)

  const downBtn = () => {
    setOpenTabs(!openTabs)
  }

  useEffect(() => {
    fetchData();
  }, [interval]);

  const fetchData = async () => {
    let apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365';

    if (interval === 1){
      apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1';
    }
    else if (interval === 7){
      apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7';
    }
    else if (interval === 30){
      apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30';
    }
    else if (interval === 365){
      apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365';
    }

    const response = await fetch(apiUrl);
    const {prices} = await response.json();
    
    const formattedData = prices.map((data) => ({
      time: data[0],
      price: Math.round(data[1])
    }))

    const {highestPrice, lowestPrice} = formattedData.reduce((result, {price}) => {
      result.highestPrice = Math.max(result.highestPrice, price);
      result.lowestPrice = Math.min(result.lowestPrice, price);
      return result
    }, {highestPrice: Number.MIN_VALUE, lowestPrice: Number.MAX_VALUE})

    setHigher(highestPrice)
    setLower(lowestPrice)

    //console.log('Highest Price: ', highestPrice);
    //console.log('Lowest Price: ', lowestPrice);

    //console.log('the formatted data is')
    //console.log(formattedData)

    setChartData(formattedData)
    
    //console.log('the prices are')
    //console.log(prices)
  }

  const tabClick = (timeInterval) => {
    setInterval(timeInterval);
  }
  const footerIconClick = (iconNumber) =>{
    setActiveFooterIcon(iconNumber)
  }

  const [btnClicked, setBtnClicked] = useState(false)
    const menuFunc = () => {
        setBtnClicked(!btnClicked)
    }
    const closeMenu = () =>{
      setBtnClicked(false)
    }

  return (
    <div className="app">
      <Header btnClicked={btnClicked} menuFunc={menuFunc}/>
      {btnClicked && <div onClick={closeMenu} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '110vh', position: 'absolute', top: '4.3rem', bottom: 0, left: 0, right: 0, zIndex: 2}}></div>}
      {activeFooterIcon === 1 ? (<Wallet downBtn={downBtn} openTabs={openTabs} tabClick={tabClick} interval={interval} chartData={chartData} higher={higher} lower={lower} />) : (<NothingToShow/>)}
      <FooterTab footerIconClick={footerIconClick} activeFooterIcon={activeFooterIcon}/>
    </div>
  )
}

export default App