import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [playerPrice, setPlayerPrice] = useState("");
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAddToCart = (player) => {
    const previouslyAdded = JSON.parse(localStorage.getItem("playerPrice"));
    if (previouslyAdded) {
      const sum = previouslyAdded + player.price;
      localStorage.setItem("playerPrice", sum);
      setPlayerPrice(sum);
    } else {
      localStorage.setItem("playerPrice", player.price);
      setPlayerPrice(player.price);
    }
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
        <Cart playerPrice={playerPrice}></Cart>
      </div>
    </div>
  );
};

export default Players;
