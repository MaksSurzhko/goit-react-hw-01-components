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


import friends from "../friends/friends.json"

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

export default friendsList;