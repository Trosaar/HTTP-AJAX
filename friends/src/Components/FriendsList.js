import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friends: []
    };
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(resolve => {
        this.setState({friends: resolve.data})
      })
      .catch(err => {console.log('Error:', err)})
  }

  render() {
    console.log(this.state);
    return (
      <div>
      {this.state.friends.map(friend => {
        return(
        <p>friend</p>
      )})}
      </div>
    )
  }
}

export default FriendsList;
