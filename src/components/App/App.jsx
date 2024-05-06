import { useState, useEffect } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"

const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
};

export const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem("Feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : initialFeedback;
    });

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setFeedback(initialFeedback);
        localStorage.removeItem("Feedback");
    };

    useEffect(() => {
        localStorage.setItem("Feedback", JSON.stringify(feedback));
    }, [feedback]);

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)
    const hasFeedback = totalFeedback > 0;

    return (
       <>
        <Description />
         <Options 
                updateFeedback={updateFeedback}  
                resetFeedback={resetFeedback}
                hasFeedback={hasFeedback}
        />
        
        {totalFeedback === 0 ? <Notification /> : <Feedback
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                totalFeedback={totalFeedback}
                positiveFeedback={positiveFeedback} />}
        </>
    )
};