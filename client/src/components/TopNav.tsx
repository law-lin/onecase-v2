import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Login from 'components/Login';
import { Input } from 'antd';

import { useHistory } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import SignOutButton from './SignOutButton';
import { useCurrentUser } from 'utils/services';

const useStyles = createUseStyles({
  logo: {
    '&:hover': {
      color: '#aaeef2',
      textDecoration: 'none',
      textShadow: '2px 2px transparent',
    },
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    color: '#FFFFFF',
    textDecoration: 'none',
    textShadow: '2px 2px black',
    fontSize: '42px',
    fontWeight: 700,
  },
});

const TopNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const { loading, error, data } = useCurrentUser();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const loggedIn = data?.currentUser?.userId ? true : false;

  const onSearch = (query: string) => {
    if (query === '' || !query.replace(/\s/g, '').length) {
      return null;
    }
    history.push(`/search?q=${query.trimStart()}`);
    // window.location.reload();
  };

  if (loading) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <a href='/' className={classes.logo}>
        OneCase
      </a>
      {loggedIn && !isTabletOrMobile && (
        <>
          <Input.Search
            placeholder='Search OneCase'
            onSearch={onSearch}
            enterButton
            style={{ margin: '0 100px' }}
          />
        </>
      )}
      {loggedIn && (
        <>
          <div style={{ flex: 1 }} />
          <SignOutButton />
        </>
      )}
      {!loggedIn && (
        <>
          <div style={{ marginLeft: 'auto' }}></div>
          <Login />
        </>
      )}
    </div>
  );
};
// function Navbar() {
//   const classes = useStyles();

//   const [loading, setLoading] = useState(false);
//   const [currentUser, setCurrentUser] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [query, setQuery] = useState('');

//   const queryDatabase = (query) => {
//     window.location.href = '/search/?username=' + query;
//   };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar className={classes.background}>
//       <Toolbar>
//         <Link href='/feed' className={classes.root}>
//           OneCase
//         </Link>
//         {currentUser && (
//           <React.Fragment>
//             <MediaQuery minWidth={1115}>
//               <SearchBar
//                 className={classes.search}
//                 classes={{
//                   iconButton: classes.button,
//                 }}
//                 onChange={(query) => setQuery(query)}
//                 onRequestSearch={() => queryDatabase(query)}
//                 searchIcon={<IoMdSearch />}
//                 closeIcon={<IoMdClose />}
//               />
//             </MediaQuery>
//             <MediaQuery maxWidth={1114}>
//               <div className={classes.search} />
//             </MediaQuery>
//             <Button className={classes.menu} onClick={handleClick}>
//               Menu
//             </Button>
//             <Menu
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//               getContentAnchorEl={null}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//             >
//               <MenuItem>
//                 <SignOutButton />
//               </MenuItem>
//             </Menu>
//           </React.Fragment>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default withFirebase(Navbar);

export default TopNav;
