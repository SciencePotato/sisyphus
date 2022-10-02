import RecordCard from "./record-card";
import './journey.css'
import {useHabit} from "./storage/HabitContext";
import {useEffect, useState} from "react";

const Journey = () => {
  const habitContext = useHabit();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(habitContext.getActivities().reverse());
    console.log(activities);
  }, [habitContext]);

  return (
    <div className="journey">
      <h1>Journey</h1>
      <div className="records-list">
        {activities.map(({title, date, description}) =>
          <RecordCard title={title} date={date} description={description} key={Math.random()}/>
        )}
      </div>
    </div>
  )
}

export default Journey;