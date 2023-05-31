import React from 'react';
import Home from '../components/Home';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Homepage</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="https://placeimg.com/400/200/nature" className="card-img-top" alt="Nature" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is the content of card 1.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="https://placeimg.com/400/200/architecture" className="card-img-top" alt="Architecture" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is the content of card 2.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
