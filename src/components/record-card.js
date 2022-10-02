import './record-card.css'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const RecordCard = ({date, description}) => {
  //Parse date
  const day = date.slice(8, 11)
  const rest_date = date.slice(4, 8) + " " + date.slice(10) 

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