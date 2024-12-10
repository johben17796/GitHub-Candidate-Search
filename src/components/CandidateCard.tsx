// import Candidate from "../interfaces/Candidate.interface";


// function renderSingleCandidate(renderee: Candidate) {
//   const name = renderee.name;
//   const username = renderee.username;
//   const location = renderee.location;
//   const avatar = renderee.avatar;
//   const email = renderee.email;
//   const html_url = renderee.html_url ;
//   const company = renderee.company ;
//   return (
//     <>
//       <div>
//         <div>
//           {avatar}
//         </div>
//         <div>
//           {name}
//           {username}
//         </div>
//         <section>
//           {location}
//           {company}
//         </section>
//         <section>
//           Contact: 
//           <ul>
//           {email}
//           </ul>
//           <ul>
//             {html_url}
//           </ul>
//         </section>
//       </div>
//     </>
//   )
// };
// function renderCandidateCard(candidateArray: [Candidate]) {
//   const listArray = [];
//   for (let i = 0; i < candidateArray.length; i++) {
//     const newCandidate = renderSingleCandidate(candidateArray[i]);
//     listArray.push(newCandidate);
//     }  
//   return listArray;
//   }
// export default renderCandidateCard;