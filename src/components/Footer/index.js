import React from 'react'
import "./style.scss"

export default function Footer() {
  return(
    <footer className="main-footer">
      <div className="main-footer__content">
        <div><b>View Code:</b> <a href="https://github.com/padoctb">https://github.com/padoctb</a></div>
        <div><b>API:</b> <a href="https://developers.themoviedb.org/3/">The Movie Database(TMDB)</a></div>
      </div>
    </footer>
    )
}