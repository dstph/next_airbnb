import React from 'react'

const Title = ({children, className, size}) => {
  const title = React.createElement(`h${size}`,{className:className, children})
  return title;
}

export default Title;