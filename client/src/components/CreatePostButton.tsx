import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles({
  button: {
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      color: '#ABABAB',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: '#3E4E55',
    borderRadius: '15px',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 800,
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxShadow: 'none',
    margin: '100px auto 0',
    border: 'none',
    cursor: 'pointer',
  },
});

function CreatePost(props: any) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <button
      className={classes.button}
      onClick={() =>
        history.push({ pathname: '/create-post', state: { ...props } })
      }
    >
      Create Post
    </button>
  );
}

export default CreatePost;
