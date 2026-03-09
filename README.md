# Memo Game

A simple memory game built with **React** and **TypeScript**.  
Flip animal cards, find matching pairs, and score points.  

**Created together with an AI coding assistant.**

<img src="https://github.com/victorizbitskiy/memo-game/blob/main/docs/img/image.png"/>

## Features

- 2×3 board with animal emoji cards
- 100 points for every matching pair
- Mismatched cards flip back after 0.5s
- Fisher–Yates shuffle for a fair random deck

## Getting Started

```bash
git clone <your-repo-url>
cd memo-game
npm install
npm run dev
```

Then open the printed URL (usually `http://localhost:5173`) in your browser.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – build for production
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Game Rules

1. The board starts with all cards face down (question marks).
2. Click a card to reveal its emoji.
3. Click a second card:
   - If the two emojis match, both cards stay face up and you earn **100 points**.
   - If they do not match, both cards flip back after **0.5 seconds**.
4. When all pairs are found, the final score is shown, and you can start a new game with the **"Начать заново"** button.

