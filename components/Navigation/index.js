import AppBar from '@mui/material/AppBar';
import ChatIcon from '@mui/icons-material/Chat';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navigation = (props) => {
  let title = "Talker archive";

  if (props?.title) {
    title = `${title}: ${props.title}`;
  }

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/">
          <ChatIcon sx={{ mr: 2 }} />
        </Link>

        <Typography variant="h1" sx={{ fontSize: "1rem" }} color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;;
