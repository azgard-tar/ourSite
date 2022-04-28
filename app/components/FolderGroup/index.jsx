import React from "react";
import Folder from '/app/components/Folder/index.jsx';
import './index.scss';

export default function FolderGroup(props) {
  const [folders, setFolders] = React.useState(props.folders || []);

  const htmlFolders = [];
  folders.forEach((folder, index) => {
    htmlFolders.push(<Folder data={folder} key={index}/>);
  });
  return (
    <div className="card-group">
      { htmlFolders }
    </div>
  )
}