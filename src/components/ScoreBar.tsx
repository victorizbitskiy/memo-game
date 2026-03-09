type ScoreBarProps = {
  score: number
}

export function ScoreBar({ score }: ScoreBarProps) {
  return (
    <header className="app-header">
      <h1 className="title">Memo Game</h1>
      <div className="score">Очки: {score}</div>
    </header>
  )
}

