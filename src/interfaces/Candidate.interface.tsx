
// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    name: string;
    username: string;
    location: string | null;
    avatar: string;
    email: string | null;
    html_url: string;
    company: string | null;
    addCandidate(usedCandidate: Candidate): void  {
        let firstCandidates = localStorage.getItem('candidates') || [];
        firstCandidates.push(usedCandidate);
        localStorage.setItem('candidates', JSON.stringify(firstCandidates));
    }
   deleteCandidate(usedCandidate: Candidate) {
    let firstCandidates = localStorage.getItem('candidates') || [];
        firstCandidates.filter(usedCandidate);
        localStorage.setItem('candidates', JSON.stringify(firstCandidates));
   }
};

