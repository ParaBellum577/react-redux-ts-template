import React, { FC } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { IRootState } from 'store';
import MainRouter from 'routes';
// import _ from 'lodash';

// Root component
const mapStateToProps = (state: IRootState) => ({
  auth: state.auth,
});

type Props = ReturnType<typeof mapStateToProps>;

const App: FC<Props> = () => {
  // const dispatch = useDispatch();
  return (
    <Router>
        <MainRouter />
    </Router>
  );
};
export default connect(mapStateToProps)(App);
