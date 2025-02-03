import { useState } from 'react';
import { searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import renderCandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {

  const [username, setUsername] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Keep it as an array

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
    const candidateData: Candidate = {
      name: userData.name,
      username: userData.login,
      location: userData.location,
      avatar: userData.avatar_url,
      email: userData.email,
      html_url: userData.html_url,
      company: userData.company,
    };
    console.log(candidateData);
    setCandidates((prevCandidates) => [...prevCandidates, candidateData]);
  };

  return (
    <>
      <h1>Candidate Search</h1>
      <h2>Search By Username</h2>
      {searchBar()}
      {candidates.length > 0 && renderCandidateCard([candidates[0]])}
    </>
  );
};

export default CandidateSearch;