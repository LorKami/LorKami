import React from 'react'
import Menu from "../components/Menu"
import ErrorPage from "../components/ErrorPage"
import PlayerApp from "../components/PlayerApp"

function Error() {
  return (
    <div>
      <Menu />
      <ErrorPage />
      <PlayerApp />
    </div>
  )
}

export default Error