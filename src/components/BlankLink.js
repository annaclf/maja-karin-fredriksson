import React from 'react';

const BlankLink = (props) => {
  return <a target="_blank" rel="noopener noreferrer" href={props.url}>{props.children}</a>
}

export default BlankLink;
