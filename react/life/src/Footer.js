import React from 'react';

export default function Footer(props){
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footer-copyright">
            <div>
              <p className="author">
                <i className="fa fa-creative-commons" /> 2017 Paul Hosler
              </p>
              <p className="links">Links</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
