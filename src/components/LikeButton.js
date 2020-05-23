import React, { useState } from "react";

export default function LikeCounter() {
  const [liked, set_like] = useState("true"); // <- using state!

  const newLike = () => {
    set_like(!liked)
  };
  const status = liked ? "You've liked this. Click to Unlike": "Like this"
  
  return (
    <div>
      <p>
        Like this post?
        <button onClick={newLike}>{status}</button>
      </p>
    </div>
  );
}