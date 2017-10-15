import React from 'react';

export default function SingleStudent(props) {
  const { student } = props;

  return (
    <li className="media">
      <div className="media-body">
        <h4 className="media-heading">{ student.name }</h4>
        { student.email }
      </div>
    </li>
  );
}
