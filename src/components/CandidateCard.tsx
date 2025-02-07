import Candidate from "../interfaces/Candidate.interface";


export function renderSingleCandidate(renderee: Candidate) {
  const name = renderee.name;
  const username = renderee.username;
  const location = renderee.location;
  const avatar = renderee.avatar;
  const email = renderee.email;
  const html_url = renderee.html_url ;
  const company = renderee.company ;
  return (
    <>
      <div>
        <div>
          <img src={avatar} alt={`${name}'s avatar`} />
        </div>
        <p>
          {name}
          {username}
        </p>
        <section>
          Location: {location}
          Company: {company}
        </section>
        <section>
          Contact: 
          <ul>
          Email: {email}
          </ul>
          <ul>
          Github:  {html_url}
          </ul>
        </section>
      </div>
    </>
  )
};
// export function renderCandidateCard(candidateArray: [Candidate]) {
//   const listArray = [];
//   for (let i = 0; i < candidateArray.length; i++) {
//     const newCandidate = renderSingleCandidate(candidateArray[i]);
//     listArray.push(newCandidate);
//     }  
//   return listArray;
//   }
