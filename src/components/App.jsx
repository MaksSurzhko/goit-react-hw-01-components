/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/


import Profile from "../users/Profile"
import user from "../users/user.json"

import Statistic from "../statistics/Statistic"
import data from "../statistics/data.json"

import FriendList from "../friends/FriendList"
import friends from "../friends/friends.json"

export default function App() {
  return(
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers={user.followers}
      views={user.views} 
      likes={user.likes}
      />


      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />


      <FriendList friends={friends} />;
      
    </div>
  )
}






