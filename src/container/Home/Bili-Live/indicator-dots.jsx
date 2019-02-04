import React from 'react'
import PropTypes from 'prop-types'

function Dot (props) {
  return (
    <span className={props.selected ? 'bili-live-carousel-span':''} style={{
      display: 'inline-block',
      height: '12px',
      width: '12px',
      borderRadius: '6px',
      backgroundColor: 'white',
      margin: '7px 9px',
      opacity: '1',
      transitionDuration: '300ms',
    }} />
  )
}

export default function IndicatorDots (props) {
  const wrapperStyle = {
    position: 'absolute',
    width: '35%',
    zIndex: '100',
    bottom: '5px',
    right:'100px',
    textAlign: 'center'
  }

  if (props.total < 2) {
    // Hide dots when there is only one dot.
    return <div style={wrapperStyle} />
  } else {
    return (
      <div style={wrapperStyle}>{
        Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} selected={props.index === i} />
        })
      }</div>
    )
  }
}

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}