import React from "react";
import "./Profile.css";
export default function profile() {
  return (
    <div className="profile-details">
      <div class="row">
        <div class="col-3 col-s-3 menu">
          <div className="profile-picture-background"></div>
        </div>

        <div class="col-6 col-s-9">
          <h1>John Doe</h1>
          <p>Bio goes here</p>
          <div className="profile-details-location">
            <i class="bi bi-geo-alt-fill"></i>
            <span className="primary-location"> Orlando</span>
          </div>
          <div className="profile-details-twitter">
            <p>
              Twitter :
              <span className="primary-text-t">
                {" "}
                https://twitter.com/johndoe
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>
          <i class="bi bi-link"></i> https://github.com/john_doe
        </p>
      </div>
      <div className="container">
        <div class="container-list">
          <div class="column">
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div class="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      <div className="next-button">
        <a href="#" class="previous">&laquo; Previous</a>
        <a href="#" class="next">1</a>
        <a href="#" class="next">2 </a>
        <a href="#" class="next">3</a>
        <a href="#" class="next">4</a>
        <a href="#" class="next">Next &raquo;</a>
      </div>
    </div>
  );
}
