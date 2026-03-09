type ControlsProps = {
  onReset: () => void
  allMatched: boolean
  score: number
}

export function Controls({ onReset, allMatched, score }: ControlsProps) {
  return (
    <div className="controls">
      <button className="reset-button" onClick={onReset}>
        Restart
      </button>
      <p
        className={`message ${
          allMatched ? 'message--visible' : 'message--hidden'
        }`}
      >
        All pairs matched! Your score: {score} points.
      </p>
    </div>
  )
}
