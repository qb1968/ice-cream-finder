import React from 'react';
import {StarFilled} from '@ant-design/icons';

const MapMarker = (({ name, key }) => {
  return (
    <div key={key}>
      {/* <span className="brand-red">{name}</span> */}
      <StarFilled  type="message" style={{ fontSize: '16px', color: '#08c' }} theme="outlined"/>
    </div>
  );
});

export default MapMarker;
