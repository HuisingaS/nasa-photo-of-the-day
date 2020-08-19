import React from 'react';

const Info = (props) => {
  return (
    <div className="props-info">
      <h2>{props.title}</h2>
      <h4>{props.date}</h4>
      <p>{props.explanation}</p>
      <h4>{props.copyright}</h4>
      <h4>{props.url}</h4>
    </div>
  )
}

export default Info;