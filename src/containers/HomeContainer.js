import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    // Add the necessary props from the Redux store
  };
};

export default connect(mapStateToProps)(Home);
