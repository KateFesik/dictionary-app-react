import React from "react";

export default function Photos(props) {
  return (
    <div className="Photos mt-4">
      <div className="card-section pt-2 ps-3 pb-1">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 6) {
              return (
                <div key={index} className="col-lg-4 col-6 mt-2 mb-2 ">
                  <a href={photo.url} target="_blank" rel="noreferrer">
                    {" "}
                    <img
                      src={photo.src.tiny}
                      alt="img-keyword"
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
