import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ChatIcon from '@mui/icons-material/Chat';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type NavigationProps = {
  title?: string
}

const Navigation = (props: NavigationProps) => {
  let title = "Talker archive";

  if (props?.title) {
    title = `${title}: ${props.title}`;
  }

  return (
    <AppBar position="relative">
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        <Stack direction="row" alignItems="center">
          <Link href="/">
            <ChatIcon sx={{ mr: 2 }} />
          </Link>

          <Typography variant="h1" sx={{ fontSize: "1rem" }} color="inherit" noWrap>
            {title}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Link href="/resources">
            Resources
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
