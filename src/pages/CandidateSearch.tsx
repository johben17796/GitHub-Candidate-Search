import { useState, useEffect } from 'react';
import { searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';


const CandidateSearch = () => {


  const [username, searchUsername] = useState('')
 
  function searchBar () {
    return (
      <>
      <input
      value={username}
      onChange={(e) => searchUsername(e.target.value)}>
      </input>
      <button>Search</button>
      </>
    )
  }
const userSearch = async () => {
  const userData = await searchGithubUser(username)
  const candidate: Candidate = {
    name: userData.name,
    username: userData.login,
    location: userData.location,
    avatar: userData.avatar_url,
    email: userData.email,
    html_url: userData.html_url,
    company: userData.company
}
console.log(candidate);

return candidate
}
return (
  <>
  <h1>Candidate Search</h1>
  <h2>Search By Username</h2>
  {searchBar()}

  {useEffect(() => {
    userSearch().then((candidate) => {
      <>
      <div>
      <img src={candidate.avatar}></img>
      <p>{candidate.username}: {candidate.username}</p>
      <p>{candidate.email}</p>
      <p>{candidate.html_url}</p>
      <p>{candidate.location}</p>
      <p>{candidate.company}</p>
      <button onClick={} >+</button>
      <button>-</button>
      </div>
      </>
    })
  }, [username])}
    </>
);
};


export default CandidateSearch;
