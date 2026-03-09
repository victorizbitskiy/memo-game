import type { Card as CardModel, CardId } from '../types/card'

type CardProps = {
  card: CardModel
  isFlipped: boolean
  isMatched: boolean
  disabled: boolean
  onClick: (id: CardId) => void
}

export function Card({
  card,
  isFlipped,
  isMatched,
  disabled,
  onClick,
}: CardProps) {
  return (
    <button
      type="button"
      className={`card ${isFlipped ? 'card--flipped' : ''} ${
        isMatched ? 'card--matched' : ''
      }`}
      onClick={() => onClick(card.id)}
      disabled={disabled}
    >
      <div className="card-inner">
        <div className="card-face card-face--front">?</div>
        <div className="card-face card-face--back">
          <div className="card-emoji">{card.value}</div>
        </div>
      </div>
    </button>
  )
}

