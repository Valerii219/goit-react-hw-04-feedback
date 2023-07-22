const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
        return(
    <div>
        <p className="">Good:<span>{good}</span></p>
        <p className="">Neutral:<span>{neutral}</span></p>
        <p className="">Bad:<span>{bad}</span></p>
        <h2>Total: <span>{total}</span></h2>
        <h2>Positive feedback  <span>{positivePercentage}</span> %</h2>
    </div>
)
    }

export default Statistics;