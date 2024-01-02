import {Component} from 'react'
import {BiMenu} from 'react-icons/bi'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {BsQuestionLg, BsTags} from 'react-icons/bs'
import {
  FaSearch,
  FaInbox,
  FaIdBadge,
  FaUsers,
  FaStackExchange,
  FaBullhorn,
} from 'react-icons/fa'

import {IoMdHelpBuoy, IoMdBriefcase} from 'react-icons/io'
import TabItem from '../TabItem'
import QuestionItem from '../QuestionItem'
import './index.css'

const tabsList = [
  {
    tabId: 'Activity',
    displayText: 'interesting',
  },
  {
    tabId: 'Featured',
    displayText: 'featured',
  },
  {
    tabId: 'Hot',
    displayText: 'hot',
  },
  {
    tabId: 'Week',
    displayText: 'week',
  },
  {
    tabId: 'Month',
    displayText: 'month',
  },
]

class Home extends Component {
  state = {activeTabId: tabsList[0].tabId, questionList: []}

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    const {activeTabId} = this.state
    const url = `https://api.stackexchange.com/2.3/questions?order=desc&sort=${activeTabId}&site=stackoverflow`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.items.map(each => ({
      answerCount: each.answer_count,
      creationDate: each.creation_date,
      title: each.title,
      viewCount: each.view_count,
      displayName: each.owner.display_name,
      accountId: each.owner.accountId,
      tags: each.tags,
    }))
    console.log(updatedData)
    this.setState({questionList: updatedData})
  }

  render() {
    const {questionList} = this.state
    return (
      <div className="main-container">
        <div className="header">
          <div className="img-container">
            <img
              src="https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png"
              alt="stack"
              className="stack-image"
            />
            <BiMenu className="menu-icon" />
            <FaSearch className="search-icon" />
            <h1 className="search">Search</h1>
          </div>
          <div className="help-container">
            <IoMdHelpBuoy className="help-icon" />
            <h1 className="help">Help</h1>
            <h1 className="help">Tour</h1>
          </div>
        </div>
        <div className="bottom-container">
          <ul className="side-navbar">
            <li className="li-item">
              <BsQuestionLg className="li-icon" />
              <p className="li-heading">QUESTIONS</p>
            </li>
            <li className="li-item">
              <IoMdBriefcase className="li-icon" />
              <p className="li-heading">JOBS</p>
            </li>
            <li className="li-item">
              <IoDocumentTextOutline className="li-icon" />
              <p className="li-heading">DOCUMENTATION</p>
            </li>
            <li className="li-item">
              <BsTags className="li-icon" />
              <p className="li-heading">TAGS</p>
            </li>
            <li className="li-item">
              <FaUsers className="li-icon" />
              <p className="li-heading">USERS</p>
            </li>
            <li className="li-item">
              <FaIdBadge className="li-icon" />
              <p className="li-heading">BADGES</p>
            </li>
            <li className="li-item">
              <FaBullhorn className="li-icon" />
              <p className="li-heading">ASK QUESTION</p>
            </li>
            <li className="li-item">
              <FaStackExchange className="li-icon" />
              <p className="li-heading">STACK EXCHANGE</p>
            </li>
            <li className="li-item">
              <FaInbox className="li-icon" />
              <p className="li-heading">INBOX</p>
            </li>
          </ul>
          <div className="question-container">
            <h1 className="bottom-question-heading">Questions</h1>
            <ul className="tab-list-container">
              {tabsList.map(each => (
                <TabItem key={each.tabId} tabDetails={each} />
              ))}
            </ul>
            <ul className="q-list-container">
              {questionList.map(each => (
                <QuestionItem details={each} />
              ))}
            </ul>
            <div className="below-image">
              <img
                src="https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png"
                alt="stack"
                className="stack-image-1"
              />
            </div>
            <h1 className="last-head">Looking For More?</h1>
            <p className="last-para">
              Browse the complete list of questions,or popular tags.Help us
              ansered unanswered questions.
            </p>
          </div>
          <div className="right-container">
            <h1 className="rc-heading">Looking out for</h1>
            <ul className="r-top">
              <li className="r-top-li">
                <h1 className="r-top-head">Front End Developer with Angular</h1>
                <p className="r-top-para">Wallet Hub</p>
                <p className="r-top-para">Washington DC Remote</p>
                <div className="r-top-btn">
                  <button className="r-top-btn-1">Angular Js</button>
                  <button className="r-top-btn-1">Cordova</button>
                </div>
              </li>
              <li className="r-top-li">
                <h1 className="r-top-head">Senior IOS/Iphone Engineer</h1>
                <p className="r-top-para">Perk.com/Inc</p>
                <p className="r-top-para">Bengaluru India In Office</p>
                <div className="r-top-btn">
                  <button className="r-top-btn-1">IQS </button>
                  <button className="r-top-btn-1">Iphone</button>
                </div>
              </li>
              <li className="r-top-li">
                <h1 className="r-top-head">Softawre Engineer</h1>
                <p className="r-top-para">Sparknet Technologies</p>
                <p className="r-top-para">No Location Remote</p>
                <div className="r-top-btn">
                  <button className="r-top-btn-1">IQS</button>
                  <button className="r-top-btn-1">Riuby</button>
                </div>
              </li>
            </ul>
            <h1 className="rc-heading-1">VIEW ALL JOBS</h1>
            <div className="r-bottom">
              <h1 className="rc-heading">Network Questions</h1>
              <p className="r-bot-para">
                Were there woman who were against giving women right to vote
              </p>
              <p className="r-bot-para">
                Why does everybody type def over c types
              </p>
              <p className="r-bot-para">
                An english word describig pseudo word
              </p>
              <p className="r-bot-para">Does one pixel have standard size</p>
            </div>
            <h1 className="rc-heading-1">VIEW ALL JOBS</h1>
          </div>
        </div>
        <hr className="line" />
        <ul className="bottom-combo">
          <li className="bottom-combo-line">about us</li>
          <li className="bottom-combo-line">tour</li>
          <li className="bottom-combo-line">help</li>
          <li className="bottom-combo-line">blog</li>
          <li className="bottom-combo-line">chat</li>
          <li className="bottom-combo-line">data</li>
          <li className="bottom-combo-line">legal</li>
          <li className="bottom-combo-line">privacy legal</li>
          <li className="bottom-combo-line">work here</li>
          <li className="bottom-combo-line">advertising info</li>
          <li className="bottom-combo-line">mobile</li>
          <li className="bottom-combo-line">contact us</li>
          <li className="bottom-combo-line">feedback</li>
        </ul>
        <hr className="line" />
        <div className="bottom2">
          <div className="bottom-list">
            <p className="bottom-para">TECHNOLOGY</p>
            <ul className="bottom-list-t">
              <li className="bottom-list-t-item">Stack Overflow</li>
              <li className="bottom-list-t-item">Server Fault</li>
              <li className="bottom-list-t-item">Super User</li>
              <li className="bottom-list-t-item">Web Applications</li>
              <li className="bottom-list-t-item">Ask Ubuntu</li>
              <li className="bottom-list-t-item">Web Masters</li>
              <li className="bottom-list-t-item">Game Development</li>
              <li className="bottom-list-t-item">Tex-Latex</li>
            </ul>
          </div>
          <div className="bottom-list-2">
            <ul className="bottom-list-t">
              <li className="bottom-list-t-item">Programmers</li>
              <li className="bottom-list-t-item">Unix & Linux</li>
              <li className="bottom-list-t-item">Ask Different</li>
              <li className="bottom-list-t-item">Word Press Development</li>
              <li className="bottom-list-t-item">
                Geographic information systems
              </li>
              <li className="bottom-list-t-item">Electrical Engineering</li>
              <li className="bottom-list-t-item">Android Enthusiats</li>
              <li className="bottom-list-t-item">50+ more</li>
            </ul>
          </div>
          <div className="bottom-list">
            <p className="bottom-para">LIFE / ARTS</p>
            <ul className="bottom-list-t">
              <li className="bottom-list-t-item">Photography</li>
              <li className="bottom-list-t-item">Science fiction & Fantasy</li>
              <li className="bottom-list-t-item">Graphic Design</li>
              <li className="bottom-list-t-item">Movies & TV</li>
              <li className="bottom-list-t-item">Seasoned Advice</li>
              <li className="bottom-list-t-item">Home Improvement</li>
              <li className="bottom-list-t-item">Personal Finance & Money</li>
              <li className="bottom-list-t-item">19 more</li>
            </ul>
          </div>
          <div className="bottom-list">
            <p className="bottom-para">CULTURE/RECREATION</p>
            <ul className="bottom-list-t">
              <li className="bottom-list-t-item">English language</li>
              <li className="bottom-list-t-item">Skeptics</li>
              <li className="bottom-list-t-item">Mi Odeya</li>
              <li className="bottom-list-t-item">Travel</li>
              <li className="bottom-list-t-item">Christianity</li>
              <li className="bottom-list-t-item">Arqade</li>
              <li className="bottom-list-t-item">Bicycles</li>
              <li className="bottom-list-t-item">21 More</li>
            </ul>
          </div>

          <div className="bottom-list">
            <p className="bottom-para">SCIENCE</p>
            <ul className="bottom-list-t">
              <li className="bottom-list-t-item">Mathematics</li>
              <li className="bottom-list-t-item">Cross Validated</li>
              <li className="bottom-list-t-item">Thoretical Science</li>
              <li className="bottom-list-t-item">Physics</li>
              <li className="bottom-list-t-item">Math Overflow</li>
              <li className="bottom-list-t-item">Chemistry</li>
              <li className="bottom-list-t-item">Biology</li>
              <li className="bottom-list-t-item">5 More</li>
            </ul>
          </div>
          <div className="bottom-list">
            <p className="bottom-para">OTHER</p>
            <ul className="bottom-list-t">
              <li className="bottom-list-t-item">Stack Apps</li>
              <li className="bottom-list-t-item">Metal Stack Exchange</li>
              <li className="bottom-list-t-item">Area 51</li>
              <li className="bottom-list-t-item">Stack Overflow carrers</li>
            </ul>
          </div>
        </div>
        <hr className="line" />
        <div className="disc">
          <p className="disclaimer">
            site design / logo 2016 stock exchange inc user contributions
            licensed under cc by sa 3.0 with attribution required
          </p>
          <p className="disclaimer">rev 2016.8.1.3852</p>
        </div>
      </div>
    )
  }
}

export default Home
