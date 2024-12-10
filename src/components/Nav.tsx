import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>



  
      <ul className="nav nav-tabs center">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Candidate Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/SavedCandidates"
            className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}
          >
            All Saved Candidates
          </Link>
        </li>

      </ul>
    


    </div>
  )
};

export default Nav;
