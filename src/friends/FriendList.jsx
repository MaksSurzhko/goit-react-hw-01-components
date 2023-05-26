import friends from "../friends/friends.json"

const friendsList = () => {
  return friends.map((items) =>{
    return(
<ul class="friend-list">
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

export default friendsList