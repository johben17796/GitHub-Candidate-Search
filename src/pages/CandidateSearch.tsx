import { useState } from 'react';
import { searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import { renderSingleCandidate } from '../components/CandidateCard';


const CandidateSearch = () => {
  
  const [username, setUsername] = useState('');
  const [chosenCandidate, setChosenCandidate]=useState<Candidate | null>(null)
  
  
  const searchBar = () => {
    return (
      <>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <button onClick={userSearch}>Search</button>
      </>
    );
  };

  const userSearch = async () => {
    const userData = await searchGithubUser(username);
    setChosenCandidate({
      name: userData.name || 'N/A',
      username: userData.login,
      location: userData.location || 'N/A',
      avatar: userData.avatar_url,
      email: userData.email || 'N/A',
      html_url: userData.html_url,
      company: userData.company || 'N/A',
    });
    console.log(chosenCandidate); 
    
  };
  const handleAdd = () => {
    if (chosenCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(chosenCandidate); // Add the new candidate
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    }
    const handleSkip = () => {
      searchGithubUser("")
  };
  
  return (
    <>
      <h1>Candidate Search</h1>
      <h2>Search By Username</h2>
      <button onClick={searchBar} className="plus">Search</button>
      <p>{chosenCandidate && renderSingleCandidate(chosenCandidate)}</p>
      <button onClick={handleAdd} className="plus">+</button>
      <button onClick={handleSkip} className="minus">-</button>
    </>
  );
};
}
export default CandidateSearch;