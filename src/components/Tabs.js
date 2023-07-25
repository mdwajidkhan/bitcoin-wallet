import Tab from "./Tab"

const Tabs = ({tabClick, interval}) => {

  return (

    <div className="tabs">
        <Tab className={interval === 1 ? 'tab tab-active' : 'tab'} time='Day' tabClick={() => tabClick(1)}/>
        <Tab className={interval === 7 ? 'tab tab-active' : 'tab'} time='Week' tabClick={() => tabClick(7)}/>
        <Tab className={interval === 30 ? 'tab tab-active' : 'tab'} time='Month' tabClick={() => tabClick(30)}/>
        <Tab className={interval === 365 ? 'tab tab-active' : 'tab'} time='Year' tabClick={() => tabClick(365)}/>
    </div>
  )
}

export default Tabs