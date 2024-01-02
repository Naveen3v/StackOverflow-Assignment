import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {tabId, displayText} = tabDetails

  return (
    <li className="tab-item-list">
      <button type="button" className="button-container">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
