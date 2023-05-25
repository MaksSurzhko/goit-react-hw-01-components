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
import data from "../data/data"


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
    </div>
  )
}




