import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAddToCart = (player) => {
    console.log("add to cart");
  };
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-4 gap-3 p-5">
      <div className="players-container grid grid-cols-1 lg:grid-cols-3 col-span-3 gap-3">
        {players.map((player) => (
          <Player
            player={player}
            key={player.id}
            handleAddToCart={handleAddToCart}
          ></Player>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Players;
