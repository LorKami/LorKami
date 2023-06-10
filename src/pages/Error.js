import React from 'react'
import Menu from "../components/Menu"
import ErrorPage from "../components/ErrorPage"
import Player from "../components/Player"

function Error() {
  return (
    <div>
        <Menu />
        <ErrorPage />
        <Player />
    </div>
  )
}

export default Error