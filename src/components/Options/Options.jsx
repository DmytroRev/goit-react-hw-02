const Options = ({ updateFeedback, resetFeedback, hasFeedback }) => {
    return (
        <div>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {hasFeedback ? (
                <button onClick={resetFeedback}>Reset</button>
            ) : null}
        </div>
    );
};

export default Options;