import { useEffect, useState } from "react";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";


const App =() =>{
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
useEffect(()=>

{if(good)console.log(123)}, [good])
 const handleClick =(option) => {
        if(option === 'good'){
            setGood((prevGood)=> prevGood + 1);}
        else if(option === 'neutral'){
setNeutral((prevNeutral)=> prevNeutral +1);
        }
        else if(option === "bad"){
            setBad((prevBad) => prevBad + 1);
        }
    }
        const total =  good + neutral + bad;

        const positivePercentage = () => {
            if (total === 0) {
            return 0;
            }
        
            return Math.round((good / total) * 100);
        };
return (<div
    style={{
        height: "100vh",
        fontSize: 30,
        color: "#010101",
        paddingLeft:"30px"
    }}
    >
    <Section title="Please Leave Feedback">
    <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleClick}
    /></Section>

{total > 0 ? (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage()}
        />
      </Section>
    ) : (
      <Section title="Statistics">
        <Notification message ="There is no feedback"/>
      </Section>
    )}
  </div>)


}
export default App;