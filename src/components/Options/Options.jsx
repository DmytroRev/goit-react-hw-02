const Options = ({ updateFeedback, resetFeedback, hasFeedback }) => {
    return (
        <div style={{ display: "flex", gap: 4}}>
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