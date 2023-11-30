import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
 render() {
  return(
    <div className ="container-fluid">
        <div className="row justify-content-center">

        {/* first column */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">WRITING</h2>
              <p className="card-text">Check out my e-books!</p>
              <a href='#' class="btn btn-primary">READ</a>
            </div>
          </div>
        </div>

        {/* second column */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
            <h2 className="card-title">DANCE</h2>
              <p className="card-text">Watch my dance vids!</p>
              <a href='#' class="btn btn-primary">WATCH</a>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
 }
}
export default App;