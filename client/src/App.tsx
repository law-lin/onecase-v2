import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import client from 'utils/ApolloClient';
import { ApolloProvider } from '@apollo/client';

import { useMediaQuery } from 'react-responsive';
// Antd
import { Layout, Row } from 'antd';

import 'antd/dist/antd.css';
import SideNav from 'components/SideNav';
import TopNav from 'components/TopNav';
// Pages
import LandingPage from 'pages/LandingPage';
import AdminPage from 'pages/AdminPage';
import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';
import IncubatorPage from 'pages/IncubatorPage';
import SearchResultsPage from 'pages/SearchResultsPage';
import JournalEditPage from 'pages/JournalEditPage';
import JournalViewPage from 'pages/JournalViewPage';
import NotFoundPage from 'pages/NotFoundPage';
// Routes
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import AdminRoute from 'components/AdminRoute';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CasesPage from 'pages/CasesPage';
import CaseViewPage from 'pages/CaseViewPage';

const { Header, Content } = Layout;
const useStyles = createUseStyles({
  screen: {
    margin: '0 auto',
    padding: '20px 0',
    maxWidth: '1460px',

    '@media screen and (min-width:1024px) and (max-width:1400px)': {
      maxWidth: '1000px',
    },
    '@media screen and (min-width:768px) and (max-width:1023px)': {
      maxWidth: '800px',
    },
    '@media screen and (max-width:767px)': {
      maxWidth: '700px',
    },
    '@media screen and (max-width:480px)': {
      maxWidth: '480px',
    },
  },
});

interface Location {
  modal: boolean;
}
const MainContent = () => {
  const location = useLocation<Location>();
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    if (!(location.state && location.state.modal)) {
      setPreviousLocation(location);
    }
  });
  const isModal =
    location.state && location.state.modal && previousLocation !== location;

  const classes = useStyles();
  return (
    <Row className={classes.screen}>
      <SideNav />

      <Switch location={isModal ? previousLocation : location}>
        <PrivateRoute exact path='/home' component={HomePage} />
        <AdminRoute exact path='/admin' component={AdminPage} />
        <PrivateRoute exact path='/incubator' component={IncubatorPage} />
        <PublicRoute exact path='/search' component={SearchResultsPage} />
        <PrivateRoute
          exact
          path='/j/:journalId/edit'
          component={JournalEditPage}
        />
        <PublicRoute
          exact
          path='/j/:journalId/:toolId'
          component={CaseViewPage}
        />
        <PublicRoute exact path='/j/:journalId' component={JournalViewPage} />

        <PublicRoute exact path='/:username/cases' component={CasesPage} />
        <PublicRoute exact path='/:username' component={ProfilePage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
      {isModal ? (
        <PublicRoute exact path='/j/:journalId/:toolId'>
          <CaseViewPage isModal={isModal} />
        </PublicRoute>
      ) : null}
    </Row>
  );
};
function App() {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <ApolloProvider client={client}>
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Layout>
            <Header
              style={{
                backgroundColor: '#3e4e55',
                padding: isTabletOrMobile ? '0px 10px' : '0px 50px',
              }}
            >
              <TopNav />
            </Header>
            <Switch>
              <PublicRoute
                restricted={true}
                exact
                path='/'
                component={LandingPage}
              />
              <Route>
                <Content style={{ minHeight: '100vh' }}>
                  <MainContent />
                </Content>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </DndProvider>
    </ApolloProvider>
  );
}

export default App;
