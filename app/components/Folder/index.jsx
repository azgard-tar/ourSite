import React from "react";
import imageNotFound from "./img/imageNotFound.png";
import './index.scss';

export default function Folder(props) {
  const folder = props.data;
  let start = '';
  let end = '';
  let images = [imageNotFound];
  if(folder) {
    if(folder.start_date && folder.start_date.isValid()){
      start = folder.start_date.format('L');
    }
    if(folder.end_date && folder.end_date.isValid()){
      end = folder.end_date.format('L');
    }
    if(folder.images && folder.images.length) {
      images = folder.images.map(img => {
        return img || imageNotFound;
      });
    }
  }
  return (
    <div className="card mx-2 mb-0">
      <img className="card-img-top" src={images[0]} alt="Folder image"/>
      <div className="card-footer">
        <small className="text-muted">{ start } - { end }</small>
      </div>
    </div>
  )
}