import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="center f3 ">
        {'This magic brian will detect faces in your picture. Give it a try!'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input placeholder="Enter URL here" type="text" className="f4 w-70 pa2 center" onChange={onInputChange} />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>{'Detect'}</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;