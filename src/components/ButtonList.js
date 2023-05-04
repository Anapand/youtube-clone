import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Game" />
      <Button name="Cricket" />
      <Button name="Song" />
      <Button name="Music" />
      <Button name="Drama" />
      <Button name="Live" />
      <Button name="Football" />
      <Button name="Tenis" />
      <Button name="Polo" />
      <Button name="Cooking" />
      <Button name="Dance" />
    </div>
  );
};

export default ButtonList;
