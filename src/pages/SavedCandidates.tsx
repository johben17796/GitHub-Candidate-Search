
import { useState, useEffect } from 'react';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedCandidates);
  }, []);


  return (
    
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p className="boxaroundit">No candidates saved.</p>
      ) : (
        <div>
          {savedCandidates.map((candidate: any) => (
            <div className="candidate">
              <div>
                <img className="boxaroundit" src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
              </div>
              <div className="boxaroundit">
                {candidate.name}
              </div>
              <p className="boxaroundit">
                {candidate.username}
              </p>
              <section className="boxaroundit">
                Location: {candidate.location}
              </section>
              <section className="boxaroundit">
                Company: {candidate.company}
              </section>
              <section className="boxaroundit">
                Contact:
                <ul className="boxaroundit">
                  Email: {candidate.email}
                </ul>
                <ul className="boxaroundit">
                  Github:  {candidate.html_url}
                </ul>
              </section>
            </div>))} 
        </div>
      )}
    </div>
  );
}

export default SavedCandidates;

    
