import { Avatar as AntdAvatar } from 'antd';

type AvatarProps = {
  profilePicture: string;
};

const Avatar = (props: AvatarProps) => {
  return <AntdAvatar src={props.profilePicture} />;
};

export default Avatar;
