
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

const Landing = (props) =>{

  useEffect(() => {
    if(props.auth.isAuthenticated){
      props.history.push('/dashboard');
    }
  },[props]);

  return(
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">DevConnect</h1>
                <p className="lead">Create a developer profile and share posts to get input
                from other developers</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
