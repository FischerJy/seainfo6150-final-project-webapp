import React from 'react'

const Baz = (props) => {
    return (
      <div className="main">
        The baz page
        <article>
          <h1>{props.content.title}</h1>
          <address>Author: {props.content.author}</address>
          <p>{props.content.text}</p>
        </article>
      </div>
    );
}

export default Baz
