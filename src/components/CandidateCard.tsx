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
      <div className="candidate">
        <div>
          <img className="boxaroundit" src={avatar} alt={`${name}'s avatar`} />
        </div>
        <div className="boxaroundit">
          {name}
        </div>
        <p className="boxaroundit">
          {username}
        </p>
        <section className="boxaroundit">
          Location: {location}
          </section>
        <section className="boxaroundit">
          Company: {company}
        </section>
        <section className="boxaroundit">
          Contact: 
          <ul className="boxaroundit">
          Email: {email}
          </ul>
          <ul className="boxaroundit">
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
