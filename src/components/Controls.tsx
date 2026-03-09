type ControlsProps = {
  onReset: () => void
  allMatched: boolean
  score: number
}

export function Controls({ onReset, allMatched, score }: ControlsProps) {
  return (
    <div className="controls">
      <button className="reset-button" onClick={onReset}>
        Начать заново
      </button>
      <p
        className={`message ${
          allMatched ? 'message--visible' : 'message--hidden'
        }`}
      >
        Все пары найдены! Ваш результат: {score} очков.
      </p>
    </div>
  )
}

