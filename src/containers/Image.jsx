import React from 'react'

const Image = ({src, alt, width, height, classNames}) => {
  return (
    <img src={src} alt={alt} width={width} height={height} className={classNames}/>
  )
}

export default React.memo(Image);