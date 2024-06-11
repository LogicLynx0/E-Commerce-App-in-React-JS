import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <IconButton onClick={handleLikeClick}>
      {liked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}

export default LikeButton;
