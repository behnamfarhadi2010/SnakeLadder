# Snakes and Ladders with Hidden Key

A React-based Snakes and Ladders game where players must find a hidden key to win.

## Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd snake-ladder-game
   ```

# SnakeLadder

Snakes and Ladders with Hidden KeyA React-based, two-player Snakes and Ladders game with a unique twist: players must find a hidden key to win. Built with Vite for fast development and easy deployment to GitHub Pages or Vercel.Table of ContentsFeatures (#features)
Screenshots (#screenshots)
Prerequisites (#prerequisites)
Project Structure (#project-structure)
Setup Instructions (#setup-instructions)
Game Rules (#game-rules)
UI Layout (#ui-layout)
Deployment (#deployment)GitHub Pages (#github-pages)
Vercel (#vercel)

Troubleshooting (#troubleshooting)
Contributing (#contributing)
License (#license)

FeaturesTwo Players: Players alternate turns rolling a die to move across a 10x10 board.
Hidden Key: A key is randomly placed on a square. The first player to land on it claims it, required to win.
Snakes and Ladders: Snakes slide players down (e.g., 67 → 34), ladders climb them up (e.g., 1 → 38).
UI Layout: Game info (turn, player stats, dice, snakes/ladders, buttons) on the left, board on the right.
Visible Controls: "Roll Dice" and "Reset Game" buttons are always accessible.
Responsive Design: Adapts to mobile with a vertical layout.

Screenshots(Optional: Add screenshots of the game UI, e.g., the board with players and the info panel. Use browser screenshots or a tool like Puppeteer to capture them and place them in a /screenshots folder.)PrerequisitesNode.js: Version 18 or higher.
npm: Included with Node.js (or use Yarn).
Git: For cloning and deploying the repository.

Project Structure

snake-ladder-game/
├── public/
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── Board.jsx
│ │ ├── Game.jsx
│ │ └── Controls.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── App.css
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md

Setup InstructionsClone the Repository:bash

git clone https://github.com/your-username/snake-ladder-game.git
cd snake-ladder-game

Install Dependencies:bash

npm install

Run Locally:
Start the development server:bash

npm run dev

Open http://localhost:5173 in your browser to play.
Build for Production:bash

npm run build

Output is in the dist/ folder.
Preview the Build:bash

npm run preview

Tests the production build locally.

Game RulesObjective: First player to reach square 100 with the hidden key wins.
Players: Two players (Player 1: , Player 2: ) alternate turns rolling a six-sided die (1–6).
Hidden Key: A key () is randomly placed on a square (not on snakes or ladders). The first player to land on it collects it.
Win Condition: Reach square 100 with the key. Without the key, players return to square 1.
Snakes: Slide down from head to tail.List: 16 → 6, 47 → 26, 49 → 11, 56 → 53, 62 → 19, 64 → 60, 87 → 24, 93 → 73, 95 → 75, 98 → 78.

Ladders: Climb up from base to top.List: 1 → 38, 4 → 14, 9 → 31, 21 → 42, 28 → 84, 36 → 44, 51 → 67, 71 → 91, 80 → 100.

Controls:Roll Dice: Moves the current player.
Reset Game: Starts a new game with a new key position.

UI LayoutLeft Panel (Game Info):Shows turn number, current player, dice roll, player positions, key status, and game messages.
Lists snakes (e.g., "Snake: 67 → 34") and ladders (e.g., "Ladder: 1 → 38").
Includes "Roll Dice" and "Reset Game" buttons, always visible.

Right Panel (Board):10x10 grid with numbered squares (1–100).
Displays Player 1 (green), Player 2 (blue), key (gold, if uncollected), snakes (red), ladders (green).

Responsive: Stacks vertically on mobile screens.

DeploymentGitHub PagesUpdate vite.config.js:
Set the base to your repository name:js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
plugins: [react()],
base: '/snake-ladder-game/' // Replace with your repo name
});

Install gh-pages:bash

npm install --save-dev gh-pages

Add Deployment Scripts:
In package.json, add:json

"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}

Deploy:bash

npm run deploy

Configure GitHub Pages:Go to your repository’s Settings > Pages on GitHub.
Set the source to gh-pages branch and folder / (root).
Access at https://your-username.github.io/snake-ladder-game/.

VercelPush to GitHub:bash

git add .
git commit -m "Deploy to Vercel"
git push origin main

Deploy on Vercel:Log in to Vercel and select "New Project."
Import your GitHub repository.
Configure:Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install

Deploy to get a URL (e.g., https://snake-ladder-game.vercel.app).
Note: Set base: '/' in vite.config.js or remove it for Vercel.

TroubleshootingBuild Error (Could not resolve entry module "index.html"):Ensure index.html is in the project root.
Verify <script type="module" src="/src/main.jsx"> in index.html.
Run npm run build -- --debug for detailed error output.

Layout Issues:Check browser developer tools (F12) for CSS conflicts.
Test on different screen sizes to ensure responsiveness.

Game Not Working:Verify npm install completed successfully.
Check console logs in the browser for JavaScript errors.

Deployment Issues:For GitHub Pages, confirm the base in vite.config.js matches your repo name.
For Vercel, ensure the build settings match the above configuration.

ContributingContributions are welcome! To contribute:Fork the repository.
Create a feature branch (git checkout -b feature/new-feature).
Commit changes (git commit -m "Add new feature").
Push to the branch (git push origin feature/new-feature).
Open a pull request.

Please include tests and update documentation as needed.LicenseThis project is licensed under the MIT License. See the LICENSE file for details.NotesScreenshots: The placeholder for screenshots can be filled by adding images to a /screenshots folder and linking them (e.g., ![Game Board](screenshots/board.png)). If you want help generating these, confirm, and I can guide you (e.g., using browser screenshots or Puppeteer).
Deployment: The instructions match the setup from previous responses, ensuring compatibility with GitHub Pages (base: '/snake-ladder-game/') and Vercel (base: '/').
Customization: If you want to add features (e.g., animations, sound effects, or custom snakes/ladders), let me know, and I can update the code or guide you.
Clarity: The guide is concise yet detailed, suitable for GitHub users and developers cloning the repo.
