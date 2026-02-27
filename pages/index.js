import React from "react";
import Image from "next/image";
import Head from "next/head";
import Form from "../components/Form";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spelling Bee Helper</title>
        <meta name="description" content="Spelling Bee Helper - Become a Genius!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="App">
        <header className="App-header">
          <Image src="/logo.png" className="App-logo" alt="logo" width={200} height={200} />
        </header>
        <div className="intro">
          <Nav />
          <h1>Welcome to Spelling Bee Helper!</h1>
          <h3 className="genius-h3">
            This app is all you need to become a
            <span className="btn-genius">Genius</span>!
          </h3>
          <div className="genius-tip">
            'Genius' is the highest point level on NYT Spelling Bee Puzzle.
          </div>
          <div className="link-container">
            <a
              rel="noreferrer"
              target="_blank"
              className="link"
              href="https://www.nytimes.com/puzzles/spelling-bee"
            >
              {`{ nytimes spelling bee word puzzle }`}
            </a>
            <div className="click-link">Click to go to the puzzle!</div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}