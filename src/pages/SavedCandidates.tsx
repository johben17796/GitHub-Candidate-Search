import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
 function displayCandidates() {
  const candidateArray = localStorage.getItem('candidates');
  console.log(candidateArray)
  if (candidateArray && candidateArray.length > 0) {
    const newArray: Candidate[] = JSON.parse(candidateArray)
    const why: number = newArray.length
    for (let i = 0: i < newArray.length; i++)
  } 
 }
  
  
  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        {displayCandidates()}
      </div>
    </>
  );
};

export default SavedCandidates;
