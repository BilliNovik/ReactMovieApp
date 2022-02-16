import React from "react";

function One() {
  return <>
    <h1>Im first component</h1>
  </>
}

function Two() {
  return <One />
}

function Three() {
  return <Two />
}

function App() {
  return <Three />
}

export default App;
