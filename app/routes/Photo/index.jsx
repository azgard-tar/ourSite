import React from 'react';
import FolderGroup from '/app/components/FolderGroup/index.jsx';

export default function Photo(props) {
  const folders = [
    {
      start_date: moment('01/01/2022'),
      end_date: moment('03/01/2022')
    },
    {
      start_date: moment('04/01/2022'),
      end_date: moment('06/01/2022'),
      images: ['']
    },
    {
      start_date: moment('07/01/2022'),
      end_date: moment('09/01/2022')
    },
    {
      start_date: moment('10/01/2022'),
      end_date: moment('12/01/2022'),
      images: ['']
    }
  ];
  return (
    <div className="d-flex align-items-center flex-column">
      <h2 className="mb-5">Лучшие фото</h2>
      <FolderGroup folders={folders}/>
    </div>
  )
}