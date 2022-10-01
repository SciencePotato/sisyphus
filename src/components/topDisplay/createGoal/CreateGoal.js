import './CreateGoal.css';

function CreateGoal({todayDate, height}) {
  return (
    <>
        <div className='createGoal'>
            <h1>{height.toFixed(3)} ft</h1>
            <h3>{todayDate}</h3>
            <div>
                <textarea placeholder='say somethinggggg'></textarea>
            </div>
            <button>Record Today</button>
        </div>
    </>
  );
}

export default CreateGoal;
