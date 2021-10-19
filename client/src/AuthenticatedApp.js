import './App.css';
// import GroupsContainer from './components/GroupsContainer'
import ProposalsContainer from './components/NftContractsContainer'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  // const history = useHistory()
  
  const handleLogout = () => {
    fetch(`/logout`, {
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
          
          <span>Current User = {currentUser.ens_domain} <button onClick={handleLogout}> Logout </button></span>
        
        <Switch>
        <Route path="/api/nfts">
            <NftContainer currentUser={currentUser} />
          </Route>

          <Route path="/api/nft_contracts">
            <NftContractContainer currentUser={currentUser} />
          </Route>

          <Redirect to="/api/nfts"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AuthenticatedApp;
