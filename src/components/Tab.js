const Tab = ({time, tabClick, className }) => {
  
  return (
    <button className={className} onClick={tabClick}>
        {time}
    </button>
    
  )
}

export default Tab