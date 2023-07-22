import css from "./FeadbackOptions.module.css"


const FeedbackOptions =({options, onLeaveFeedback, }) =>{
  
    return (
        <div className="" > 
        {options.map(option => {
          return(
          
          <button className={css.btn}  key={option} onClick={() => onLeaveFeedback(option)}>
            
            {option}
          </button>
          
        )})}
        </div>
)
}

export default FeedbackOptions;