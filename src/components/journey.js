import RecordCard from "./record-card";
import './journey.css'

const test_data = [
  {
    'title': 'task1',
    'date': '23 Sep 2022',
    'description': 'Today i jogged for 10 miles',
  },
  {
    'title': 'task2',
    'date': '22 Sep 2022',
    'description': 'Today i jogged for 5 miles, kinda tired right now.',
  },
  {
    'title': 'task3',
    'date': '19 Sep 2022',
    'description': 'I wanna start to jogging. Just for fun.',
  }, 
  {
    'title': 'task3',
    'date': '18 Sep 2022',
    'description': 'I wanna start to jogging. Just for fun.',
  },
  {
    'title': 'task3',
    'date': '15 Sep 2022',
    'description': 'I wanna start to jogging. Just for fun.',
  }
]

const Journey = () => {
  return (
    <div className="journey">
      <h1>Journey</h1>
      <div className="records-list">
        {test_data.map(({title, date, description}) => 
          <RecordCard title={title} date={date} description={description} key={Math.random()}/>
        )}
      </div>
    </div>
  )
}

export default Journey;