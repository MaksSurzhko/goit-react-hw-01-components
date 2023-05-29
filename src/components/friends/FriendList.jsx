/*import friends from "../friends/friends.json"

const friendsList = () => {
  return friends.map((items) =>{
    return(
<ul class="friend-list">
  <li class="item" key={items.id}>
    <span className="status">{items.isOnline}</span>
  <img class="avatar" src={items.avatar} alt="User avatar" width="48" />
    <p class="name">{items.name}</p>
    </li>
    <li class="item">
  <span className="status">{items.isOnline}</span>
  <img class="avatar" src={items.avatar} alt="User avatar" width="48" />
  <p class="name">{items.name}</p>
    </li>
    <li class="item">
  <span className="status">{items.isOnline}</span>
  <img class="avatar" src={items.avatar} alt="User avatar" width="48" />
  <p class="name">{items.name}</p>
</li>
        </ul>
    )
    }
  )
  
} 

export default friendsList*/


/*import friends from "../friends/friends.json"
import "../friends/friends.css"
console.log(friends)
const friendsList = () => (

  <ul className="friend-list">
      {friends.map((item) => (
      <li className="items" key={item.id}>
      <span className="status">{item.isOnline}</span>
      <img className="avatars" src={item.avatar} alt="User avatar" width="48" />
       <p className="names">{item.name}</p>
    </li>
      ))}
    </ul>
);

export default friendsList;*/


import PropTypes from 'prop-types';
import React from "react";
import friends from "./friends.json";
import fcss from "../friends/friends.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? fcss.online: fcss.offline;
  
  return (
    <li className={fcss.items}>
      <span className={`${fcss.status} ${statusClassName}`}></span>
      <img className={fcss.avatar} src={avatar} alt="User avatar" width="42" />
      <p className={fcss.name}>{name}</p>
    </li>
  );
};

const FriendsList = () => (
  <ul className={fcss.friendlist}>
    {friends.map((friend) => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default FriendsList;

FriendListItem.propTypes = {
  id:PropTypes.string,
  avatar:PropTypes.string,
  name:PropTypes.string,
}