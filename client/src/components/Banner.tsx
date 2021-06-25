import React from 'react';
import EditProfileButton from './EditProfileButton';

function Banner(props: any) {
  return (
    <div style={{ marginTop: '10px' }}>
      <div>
        <img
          style={{
            display: 'flex',
            borderRadius: '6px',
            width: '100%',
            height: '200px',
            backgroundColor: props.coverImageUrl ? 'none' : '#373E49',
          }}
          src={props.coverImageUrl}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '10px',
        }}
      >
        {props.isOwner && <EditProfileButton {...props} />}
      </div>
    </div>
  );
}

export default Banner;
