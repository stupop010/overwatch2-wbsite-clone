import React from "react"
import { Link } from "gatsby"

const OverlayText = () => (
  <div className="overlay-container">
    <div className="overlay-flex">
      <div className="overlay-content">
        <h2>YOUR MISSION CONTINUES</h2>
        <div className="overlay-info">
          <h3>KEEP YOUR COLLECTIONS</h3>
          <p>
            Your accomplishments and loot collections will be carried forward to
            Overwatch 2. That means you’ll keep your skins, player icons,
            sprays, emotes, and more!
          </p>
        </div>
        <div className="overlay-info">
          <h3>NEW MAPS AND HEROES</h3>
          <p>
            Current Overwatch players will battle side-by-side with Overwatch 2
            players in PvP multiplayer; they’ll also be able to play Overwatch 2
            heroes and maps.
          </p>
        </div>
      </div>
      <div className="overlay-text-call">
        <h3>BEGIN YOUR WATCH TODAY</h3>
        <p>
          Experience the award-winning team-based action game that started it
          all.
        </p>
        <a
          className="buy-btn"
          href="https://eu.shop.battle.net/en-gb/product/overwatch"
        >
          buy overwatch
        </a>
      </div>
    </div>
  </div>
)

export default OverlayText
