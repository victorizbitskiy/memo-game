import type { Card as CardModel, CardId } from '../types/card'
import { Card } from './Card'

type BoardProps = {
  cards: CardModel[]
  flippedIds: CardId[]
  matchedIds: Set<CardId>
  isChecking: boolean
  onCardClick: (id: CardId) => void
}

export function Board({
  cards,
  flippedIds,
  matchedIds,
  isChecking,
  onCardClick,
}: BoardProps) {
  return (
    <div className="board">
      {cards.map((card) => {
        const isMatched = matchedIds.has(card.id)
        const isFlipped = flippedIds.includes(card.id) || isMatched

        return (
          <Card
            key={card.id}
            card={card}
            isFlipped={isFlipped}
            isMatched={isMatched}
            disabled={isChecking || isMatched}
            onClick={onCardClick}
          />
        )
      })}
    </div>
  )
}

