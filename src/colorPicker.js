const colorPick = colors => {
  const random = Math.floor(Math.random() * colors.length);

  return colors[random].color;
};

export default colorPick;
