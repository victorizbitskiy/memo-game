import type { Card } from '../types/card'

const EMOJIS = ['🐶', '🐱', '🐼'] as const

export function createShuffledDeck(): Card[] {
  const base: Card[] = EMOJIS.flatMap((emoji, index) => [
    { id: index * 2, value: emoji },
    { id: index * 2 + 1, value: emoji },
  ])

  // простая тасовка Фишера–Йетса
  const deck = [...base]
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}

