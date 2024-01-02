import {AiFillLike} from 'react-icons/ai'
import {RiQuestionAnswerLine} from 'react-icons/ri'
import {MdOutlinePreview} from 'react-icons/md'
import './index.css'

const QuestionItem = props => {
  const {details} = props
  const {
    answerCount,
    creationDate,
    displayName,
    title,
    viewCount,
    tags,
  } = details
  return (
    <li className="q-item">
      <div className="left-q">
        <p className="q-li-para">{title}</p>
        <div className="tags">
          {tags.map(each => (
            <button className="tag-btn">{each}</button>
          ))}
        </div>
        <p className="q-li-para-2">
          Modified {creationDate} ago {displayName}
        </p>
      </div>
      <div className="right-q">
        <div className="count">
          <p className="dist">0</p>
          <p className="dist">{answerCount}</p>
          <p className="dist">{viewCount}</p>
        </div>
        <div className="text">
          <p className="dist-1">votes</p>
          <p className="dist-1">answer</p>
          <p className="dist-1">views</p>
        </div>
        <div className="icon">
          <AiFillLike className="dis-icon" />
          <RiQuestionAnswerLine className="dis-icon" />
          <MdOutlinePreview className="dis-icon" />
        </div>
      </div>
    </li>
  )
}

export default QuestionItem
