// import React, { useEffect, useRef, useState } from 'react';
// import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.png";
// import search from "../../assets/search_icon.svg";
// import bell_icon from "../../assets/bell_icon.svg";
// import profile from "../../assets/profile_img.png";
// import caret_icon from "../../assets/caret_icon.svg";
// import { logout } from '../../firebase';


// function Navbar() {

//   const navRef = useRef()

//   useEffect(() => {
//     const handleScroll = () => {
//       // if (window.scrollY >= 80) {
//       //   navRef.current?.classList.add('nav-dark');
//       // } else {
//       //   navRef.current?.classList.remove('nav-dark');
//       // }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   return (
//     <div className={styles.navbar} ref={navRef}>
//         <div className={styles.navbar-left}>
//           <img src={logo} alt="Netflix-logo" />

//           <ul>
//             <li>Home</li>
//             <li>TV Shows</li>
//             <li>Movies</li>
//             <li>New & Popular</li>
//             <li>Browser by Languages</li>
//           </ul>
//         </div>
//         <div className="navbar-right">
//           <img src={search} alt="icons" className='icons'/>
//           <p>Childern</p>
//           <img src={bell_icon} alt="icons" className='icons'/>
//           <div className="navbar-profile">
//             <img className='profile' src={profile} alt="" />
//             <img src={caret_icon} alt="" />
//             <div className="dropdown">
//               <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar












// function Navbar() {
//   const navRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         navRef.current?.classList.add(styles.navDark);
//       } else {
//         navRef.current?.classList.remove(styles.navDark);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={styles.navbar} ref={navRef}>
//       <div className={styles.navbarLeft}>
//         <img src={logo} alt="Netflix-logo" />
//         <ul>
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>New & Popular</li>
//           <li>Browse by Languages</li>
//         </ul>
//       </div>
//       <div className={styles.navbarRight}>
//         <img src={search} alt="search" className={styles.icons} />
//         <span>Children</span>
//         <img src={bell_icon} alt="notifications" className={styles.icons} />
//         <div className={styles.navbarProfile}>
//           <img src={profile} alt="profile" className={styles.profile} />
//           <img src={caret_icon} alt="dropdown" />
//           <div className={styles.dropdown}>
//             <p onClick={() =>{logout()}}>Sign Out of Netflix</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;














// function Navbar({ onSearch }) {
//   const navRef = useRef();
//   const [showSearchInput, setShowSearchInput] = useState(false);
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         navRef.current?.classList.add(styles.navDark);
//       } else {
//         navRef.current?.classList.remove(styles.navDark);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       onSearch(query.trim());
//     }
//   };

//   return (
//     <div className={styles.navbar} ref={navRef}>
//       <div className={styles.navbarLeft}>
//         <img src={logo} alt="Netflix-logo" />
//         <ul>
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>New & Popular</li>
//           <li>Browse by Languages</li>
//         </ul>
//       </div>

//     <div className={styles.navbarRight}>
//   <form onSubmit={handleSearchSubmit} className={`${styles.searchForm} ${showSearchInput ? styles.active : ''}`}>
//     <button
//       type="button"
//       className={styles.searchButton}
//       onClick={() => setShowSearchInput(!showSearchInput)}
//     >
//       <img src={search} alt="search" />
//     </button>
//     <input
//       type="text"
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       placeholder="Search movies..."
//       className={styles.searchInput}
//       style={{ display: showSearchInput ? 'block' : 'none' }}
//     />
//   </form>

//   <span>Children</span>
//   <img src={bell_icon} alt="notifications" className={styles.icons} />
//   <div className={styles.navbarProfile}>
//     <img src={profile} alt="profile" className={styles.profile} />
//     <img src={caret_icon} alt="dropdown" />
//     <div className={styles.dropdown}>
//       <p onClick={() => logout()}>Sign Out of Netflix</p>
//     </div>
//   </div>
// </div>
//     </div>

//   );
// }

// export default Navbar;



























// import React, { useEffect, useRef, useState } from 'react';
// import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.png";
// import search from "../../assets/search_icon.svg";
// import bell_icon from "../../assets/bell_icon.svg";
// import profile from "../../assets/profile_img.png";
// import caret_icon from "../../assets/caret_icon.svg";
// import { logout } from '../../firebase';

// function Navbar({ onSearch }) {
//   const navRef = useRef();
//   const [showSearchInput, setShowSearchInput] = useState(false);
//   const [query, setQuery] = useState('');
//   const searchInputRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         navRef.current?.classList.add(styles.navDark);
//       } else {
//         navRef.current?.classList.remove(styles.navDark);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     // Focus the input when it becomes visible
//     if (showSearchInput && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [showSearchInput]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       onSearch(query.trim());
//       // Optionally close the search input after submission
//       // setShowSearchInput(false);
//     }
//   };

//   const handleSearchClick = () => {
//     setShowSearchInput(!showSearchInput);
//     if (!showSearchInput) {
//       setQuery(''); // Clear search when opening
//     }
//   };

//   return (
//     <div className={styles.navbar} ref={navRef}>
//       <div className={styles.navbarLeft}>
//         <img src={logo} alt="Netflix-logo" />
//         <ul>
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>New & Popular</li>
//           <li>Browse by Languages</li>
//         </ul>
//       </div>

//       <div className={styles.navbarRight}>
//         <form onSubmit={handleSearchSubmit} className={`${styles.searchForm} ${showSearchInput ? styles.active : ''}`}>
//           <button
//             type="button"
//             className={styles.searchButton}
//             onClick={handleSearchClick}
//             aria-label="Search"
//           >
//             <img src={search} alt="search" />
//           </button>
//           <input
//             ref={searchInputRef}
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Titles, people, genres"
//             className={styles.searchInput}
//           />
//         </form>

//         <span>Children</span>
//         <img src={bell_icon} alt="notifications" className={styles.icons} />
//         <div className={styles.navbarProfile}>
//           <img src={profile} alt="profile" className={styles.profile} />
//           <img src={caret_icon} alt="dropdown" />
//           <div className={styles.dropdown}>
//             <p onClick={() => logout()}>Sign Out of Netflix</p>
//           </div>
//         </div>
//       </div>
//     </div>
// );
// }

// export default Navbar;














import React, { useEffect, useRef, useState } from 'react';
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from '../../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const navRef = useRef();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // TMDB API Configuration
  const API_KEY = '662704c7860fefb640db978e5e9d5744';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w92';

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navRef.current?.classList.add(styles.navDark);
      } else {
        navRef.current?.classList.remove(styles.navDark);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  

  // Handle clicks outside search to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && 
          !searchContainerRef.current.contains(event.target)) {
        setShowSearchInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when shown
  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        performSearch(query.trim());
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const performSearch = async (searchQuery) => {
    try {
      setIsSearching(true);
      const response = await axios.get(`${BASE_URL}/search/multi`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          include_adult: false,
          language: 'en-US'
        }
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setShowSearchInput(!showSearchInput);
    if (!showSearchInput) {
      setQuery('');
      setSearchResults([]);
    }
  };

  // const handleResultClick = (result) => {
  //   onSearch(result);
  //   setShowSearchInput(false);
  //   setQuery('');
    
  // };


  // In your search result item click handler
    const handleResultClick = async (result) => {
    try {
      // First check if it's anime
      const detailsResponse = await axios.get(
        `https://api.themoviedb.org/3/${result.media_type}/${result.id}?api_key=${API_KEY}`
      );
      
      const isAnime = detailsResponse.data.genres?.some(
        genre => genre.id === 16 // 16 is Animation genre ID
      );


        navigate(`/player/${result.media_type}/${result.id}`);
      
      
      setShowSearchInput(false);
      setQuery('');
    } catch (error) {
      console.error("Error handling result click:", error);
    }
  };




const handleLogout = async () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  if (!confirmLogout) return;

  try {
    await logout();
    navigate("/"); // ✅ redirect to Landing Page
  } catch (err) {
    console.error("Logout failed", err);
  }
};


  

  return (
    <div className={styles.navbar} ref={navRef}>
      <div className={styles.navbarLeft}>
        <img src={logo} alt="Netflix logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className={styles.navbarRight} ref={searchContainerRef}>
        <div className={styles.searchContainer}>
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className={`${styles.searchForm} ${showSearchInput ? styles.active : ''}`}
          >
            <button
              type="button"
              className={styles.searchButton}
              onClick={handleSearchClick}
              aria-label="Search"
            >
              <img src={search} alt="Search icon" />
            </button>
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, shows..."
              className={styles.searchInput}
            />
          </form>

          {showSearchInput && query && (
            <div className={styles.searchResults}>
              {isSearching ? (
                <div className={styles.searchLoading}>Searching...</div>
              ) : searchResults.length > 0 ? (
                <div className={styles.resultsContainer}>
                  {searchResults.slice(0, 5).map((result) => (
                    <div 
                      key={result.id} 
                      className={styles.searchResultItem}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className={styles.searchResultImage}>
                        <img
                          src={
                            result.poster_path 
                              ? `${IMAGE_BASE_URL}${result.poster_path}`
                              : result.backdrop_path
                                ? `${IMAGE_BASE_URL}${result.backdrop_path}`
                                : 'https://via.placeholder.com/92x138?text=No+Image'
                          }
                          alt={result.title || result.name}
                          className={styles.resultImage}
                        />
                      </div>
                      <div className={styles.searchResultInfo}>
                        <div className={styles.searchResultTitle}>
                          {result.title || result.name}
                        </div>
                        <div className={styles.searchResultDetails}>
                          <span className={styles.searchResultType}>
                            {result.media_type === 'movie' ? 'Movie' : 'TV Show'}
                          </span>
                          {result.release_date && (
                            <span className={styles.searchResultYear}>
                              {new Date(result.release_date).getFullYear()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>No results found for "{query}"</div>
              )}
            </div>
          )}
        </div>

        <span className={styles.kidsLink}>Children</span>
        <button className={styles.notificationButton}>
          <img src={bell_icon} alt="Notifications" className={styles.notificationIcon} />
        </button>
        
        <div className={styles.profileMenu}>
          <div className={styles.profileContainer}>
            <img src={profile} alt="Profile" className={styles.profileImage} />
            <img src={caret_icon} alt="Menu" className={styles.menuIcon} />
          </div>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownItem} onClick={(handleLogout)}>
              Sign Out of Netflix
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;