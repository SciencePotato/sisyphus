import './GoalPoint.css';

function GoalPoint({todayDate, height, deltaHeight}) {
  return (
    <>
        <div className='goalPoint'>
            <h3>+{deltaHeight.toFixed(3)} ft</h3>
            <h1>{height.toFixed(3)} ft</h1>
            <h3>{todayDate}</h3>
        </div>
    </>
  );
}

export default GoalPoint;
