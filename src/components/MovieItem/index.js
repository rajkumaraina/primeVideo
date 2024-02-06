import './index.css'

import React from 'react'

import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item

  const overlayStyles = {
    backgroundColor: '#ffff',
  }
  return (
    <div className="popup-container">
      <Popup
        trigger={
          <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
        }
        modal
        className="popup-content"
      >
        {close => (
          <>
            <div className="popup">
              <IoMdClose
                className="closeIcon"
                data-testid="closeButton"
                onClick={() => close()}
              />
              <div className="video">
                <ReactPlayer
                  url={videoUrl}
                  height="400px"
                  width="85%"
                  controls
                />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
