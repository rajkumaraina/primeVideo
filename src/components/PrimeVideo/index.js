import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  state: {}

  render() {
    return (
      <div className="mainContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime"
        />
        <h1 className="movie">Action Movies</h1>
        <MoviesSlider value="ACTION" />
        <h1 className="movie">Comedy Movies</h1>
        <MoviesSlider value="COMEDY" />
      </div>
    )
  }
}
export default PrimeVideo
