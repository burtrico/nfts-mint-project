import './App.css';
// import GroupsContainer from './components/GroupsContainer'
import NftContractContainer from './components/NftContractContainer'
import NftContainer from './components/NftContainer'
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import NavBar from "./components/NavBar";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  // const history = useHistory()
  
  const handleLogout = () => {
    fetch(`/api/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          // history.push('/')
        }
      })
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        
        <Switch>
        {/* <Route path="/nfts">
            <NftContainer currentUser={currentUser} />
          </Route> */}

          <Route path="/nft_contracts">
            <NftContractContainer currentUser={currentUser} />
          </Route>

          <Redirect to="/nft_contracts"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AuthenticatedApp;
