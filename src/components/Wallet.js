import BitcoinsAvailable from "./BitcoinsAvailable"
import Tabs from "./Tabs"
import Chart from "./Chart"
import BuySell from "./BuySell"

const Wallet = ({downBtn, openTabs, tabClick, interval, chartData, higher, lower}) => {
  return (
    <>
        <BitcoinsAvailable downBtn={downBtn} openTabs={openTabs}/>
        {openTabs && <Tabs tabClick={tabClick} interval={interval}/>}
        <Chart chartData={chartData} higher={higher} lower={lower}/>
        <BuySell/>
    </>
  )
}

export default Wallet