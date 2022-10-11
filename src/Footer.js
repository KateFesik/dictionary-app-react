import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-4">
      <p className="sign">
        Coded by{" "}
        <a
          href="https://clinquant-sunflower-08a338.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="There is a link portfolio to Kateryna Ivanova"
        >
          Kateryna Ivanova
        </a>
        <br />
        <a
          href="https://github.com/KateFesik/dictionary-app-react"
          target="_blank"
          rel="noreferrer"
          title="There is a link github this to Dictionary project"
        >
          open-source code on Github
        </a>
      </p>
    </footer>
  );
}
