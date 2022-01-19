import React from "react";

const CardModule = (props) => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={props.src} className="card-img-top" alt={props.alt} />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModule;
