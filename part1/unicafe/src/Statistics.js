import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
    const getAverage = (good, neutral, bad) => {
        if (good + neutral + bad === 0){
          return 0;
        }
        return (good - bad) / (good + neutral +bad);
      }
    const getPositive = (good, neutral, bad) => {
    if (good + neutral + bad ===0){
        return 0;
    }
    return good / (good + neutral +bad);
    }
    const formatAsPercent = (num) => {
    return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 17,
    }).format(num);
    }
    if (good===0 && neutral===0 && bad===0){
        return <div>
            <h1>statistics</h1>
            <p>No feed back given</p>    
        </div>
    }
    return (
    <div>
        <h1>statistics</h1>
        <table>
            <tbody>
                <StatisticLine text={'good'} value={good}/>
                <StatisticLine text={'neutral'} value={neutral}/>
                <StatisticLine text={'bad'} value={bad}/>
                <StatisticLine text={'all'} value={(good + neutral + bad)}/>
                <StatisticLine text={'average'} value={getAverage(good, neutral, bad)}/>
                <StatisticLine text={'positive'} value={formatAsPercent(getPositive(good, neutral, bad))}/>
            </tbody>
        </table>
    </div>
    )
}

export default Statistics