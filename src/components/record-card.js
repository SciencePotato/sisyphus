import './record-card.css'

const RecordCard = ({date, description}) => {
  //Parse date
  let day = date[0] + date[1]
  let rest_date = date.slice(3)

  return (
    <div className="record-card">
      <div className='record-card-date'>
        <h1>{day}</h1>
        <h2>{rest_date}</h2>
      </div>
      
      <p>{description}</p>
    </div>
  )
}

export default RecordCard;