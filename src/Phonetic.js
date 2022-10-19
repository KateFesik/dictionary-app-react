import React from "react";
import "./Results.css";
import { AiFillAudio } from "react-icons/ai";

export default function Phonetic(props) {
  var country = props.phonetic.audio.split("-")[1];
  if (country === "1") {
    country = props.phonetic.audio.split("-")[2];
  }

  let savingSound =
    props.phonetic.audio ?? "https://example.com/audio/sound.mp3";

  function playPhoneticAudio(event) {
    event.preventDefault();
    let audio = new Audio(savingSound);
    audio.play();
  }

  if (country === "us.mp3") {
    return (
      <div className="Phonetc">
        <AiFillAudio onClick={playPhoneticAudio} /> {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
