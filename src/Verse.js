import React from 'react';

class Verse extends React.Component {
  render() {
    return (
      <div>
        <p>Reference: {this.props.reference}</p>
        <p>Verse: {this.props.verse}</p>
      </div>
    )
  }
  export default Verse;
}