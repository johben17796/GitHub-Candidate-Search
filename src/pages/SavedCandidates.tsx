import Candidate from "../interfaces/Candidate.interface";
import Button from "../components/Button";

const SavedCandidates = () => {
 function displayCandidates() {
  const candidateArray = localStorage.getItem('candidates');
  console.log(candidateArray)
  if (candidateArray && candidateArray.length > 0) {
    const newArray: Candidate[] = JSON.parse(candidateArray)

    for (let i = 0; i < newArray.length; i++) {
      return (
      <>
      <div>
      <img src={newArray[i].avatar}></img>
      <p>{newArray[i].name}: {newArray[i].username}</p>
      <p>{newArray[i].email}</p>
      <p>{newArray[i].html_url}</p>
      <p>{newArray[i].location}</p>
      <p>{newArray[i].company}</p>
      <Button />
      </div>
      </>
      )
    }
  } else {
    return (
      <div>
        <p>No candidates found</p>
        </div>
    )
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
