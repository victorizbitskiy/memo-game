import { useEffect, useMemo, useState } from 'react'
import './App.css'
import type { CardId, Card } from './types/card'
import { createShuffledDeck } from './utils/createShuffledDeck'
import { Board } from './components/Board'
import { ScoreBar } from './components/ScoreBar'
import { Controls } from './components/Controls'

function App() {
  const [cards, setCards] = useState<Card[]>(() => createShuffledDeck())
  const [flippedIds, setFlippedIds] = useState<CardId[]>([])
  const [matchedIds, setMatchedIds] = useState<Set<CardId>>(new Set())
  const [isChecking, setIsChecking] = useState(false)
  const [score, setScore] = useState(0)

  const allMatched = useMemo(
    () => matchedIds.size === cards.length,
    [matchedIds, cards.length],
  )

  const handleCardClick = (id: CardId) => {
    if (isChecking) return
    if (matchedIds.has(id)) return
    if (flippedIds.includes(id)) return

    const newFlipped = [...flippedIds, id]
    setFlippedIds(newFlipped)

    if (newFlipped.length === 2) {
      setIsChecking(true)
    }
  }

  useEffect(() => {
    if (!isChecking || flippedIds.length !== 2) return

    const [firstId, secondId] = flippedIds
    const firstCard = cards.find((c) => c.id === firstId)
    const secondCard = cards.find((c) => c.id === secondId)
    if (!firstCard || !secondCard) return

    const isMatch = firstCard.value === secondCard.value

    const timeout = setTimeout(() => {
      if (isMatch) {
        setMatchedIds((prev) => {
          const next = new Set(prev)
          next.add(firstId)
          next.add(secondId)
          return next
        })
        setScore((prev) => prev + 100)
      }

      setFlippedIds([])
      setIsChecking(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [isChecking, flippedIds, cards])

  const handleReset = () => {
    setCards(createShuffledDeck())
    setFlippedIds([])
    setMatchedIds(new Set())
    setIsChecking(false)
    setScore(0)
  }

  return (
    <div className="app">
      <ScoreBar score={score} />

      <main>
        <Board
          cards={cards}
          flippedIds={flippedIds}
          matchedIds={matchedIds}
          isChecking={isChecking}
          onCardClick={handleCardClick}
        />

        <Controls onReset={handleReset} allMatched={allMatched} score={score} />
      </main>
    </div>
  )
}

export default App
