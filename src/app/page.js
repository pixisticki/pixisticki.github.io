/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Typewriter from "typewriter-effect";
import { Tooltip } from 'react-tooltip'
import styles from "./rainbows.module.css";

const profileImageUrl = "https://cdn.discordapp.com/avatars/804066391614423061/4359eb7c4ef2a127bd052a9a96d773eb.webp";
const githubImageUrl = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
const robloxImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Roblox_Logo.svg/1200px-Roblox_Logo.svg.png";
const discordImageUrl = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg";

function onGithubClick() {
  window.location.assign("https://github.com/anyastrophic");
}

function onRobloxClick() {
  window.location.assign("https://roblox.com/users/2947401001/profile");
}

function onDiscordClick() {
  window.location.assign("discord://-/users/804066391614423061");
}

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-black-transparent rounded-3xl h-[24rem] w-[300pt] h-[400pt] flex flex-col self-center border border-zinc-900">
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <img
              className="opacity-100 rounded-full mb-10 mt-10 h-48 w-48 hover:rotate-360 transition ease-in-out duration-1000"
              src={profileImageUrl}
              alt="Profile" 
            />
          </div>

          <h1 className="self-center text-2xl text-zinc-100">
            Hey, I'm anya!
            <div className={`w-[10rem] h-[0.1rem] ${styles.rainbowDivider}`}></div>
          </h1>
          <h2 className="self-center mt-2 text-zinc-200">
            <Typewriter
              options={{
                strings: [
                  'A Graphic Designer',
                  'A Python Developer',
                  'A Lua Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
            <div className={`w-[10rem] h-[0.05rem] ${styles._rainbowDivider}`}></div>
          </h2>
          <h3 className="self-center text-sm w-72 mt-4 text-zinc-400">
            <i>"this is such a cool quote, truly one of the quotes ever"</i> - Nobody Ever
          </h3>
          <div className="flex self-center items-center mt-6">
            <img
              className="cursor-pointer rounded-none h-10 w-10 m-3 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700"
              src={robloxImageUrl}
              alt="Roblox"
              onClick={onRobloxClick}
            />
            <img
              className="cursor-pointer rounded-full h-10 w-10 m-3 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700"
              src={githubImageUrl}
              alt="GitHub"
              onClick={onGithubClick}
            />
            <img
              className="cursor-pointer rounded-none h-10 w-10 m-3 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700"
              id="tooltip"
              src={discordImageUrl}
              alt="Discord"
              onClick={onDiscordClick}
            />
            <Tooltip anchorSelect="#tooltip" clickable>
              anyastrophic#2775
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
