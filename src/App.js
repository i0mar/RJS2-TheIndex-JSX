import React from "react";
import authors from "./data";

function App() {
  return (
    <body>
  <div id="root"></div>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div id="sidebar">
          <img src="theindex.svg" class="logo" alt="the index logo"/>
          <section>
            <h4 class="menu-item active">
              <button>AUTHORS</button>
            </h4>
          </section>
        </div>
      </div>
      <div class="content col-10">
        <div class="authors">
          <h3>Authors</h3>
          <div class="row">
            {authors.map(author =>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img className="card-img-top img-fluid" src={author.imageUrl} alt="J.K. Rowling"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{author.first_name + author.last_name}</span>
            </h5>
            <small className="card-text">{author.books.length}</small>
          </div>
        </div>
      </div>
    )}
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
  );
}

export default App;
