import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserInfo = (props: any) => {
  return (
    <div style={{ display: 'flex', marginTop: '50px' }}>
      <a href={`/${props.username}`} style={{ display: 'block' }}>
        <Avatar src={props.profilePicture} size={64} icon={<UserOutlined />} />
      </a>
      <div
        style={{
          display: 'flex',
          fontWeight: 400,
          fontSize: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '10px',
          flexDirection: 'column',
        }}
      >
        <a href={`/${props.username}`} style={{ display: 'block' }}>
          {props.name}
        </a>
        <span>@{props.username}</span>
      </div>
    </div>
  );
};

export default UserInfo;
