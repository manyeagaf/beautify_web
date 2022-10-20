import React from "react";

function SideBar() {
  return (
    <article>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="title-section">
              <h1>Basic Sticky Sidebar with Bootstrap 4</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="content-section">
              <h2>Content Section</h2>
            </div>
          </div>
          <div className="col-5">
            <div className="sidebar-item">
              <div className="make-me-sticky">
                <h3>
                  Item 1 Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
                  1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
                  1Item 1
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SideBar;
