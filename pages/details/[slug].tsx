import { useRouter } from 'next/router';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import slugify from 'slugify';

import data from '../../data/talkers.json';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const TalkerDetails = () => {
  /*
  const router = useRouter();
  const { slug } = router.query;

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');

  const talkers = data.talkers.filter(talker => {
    const testSlug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

    return !talker?.hide && testSlug == slug;
  });
   */

  const talker = data.talkers[0];
  const emails = talker?.emails ?? [];
  const hosts = talker?.hosts ?? [];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ChatIcon sx={{ mr: 2 }} />
          <Typography variant="h1" sx={{ fontSize: "1rem" }} color="inherit" noWrap>
            Talker archive: {talker.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {talker.name}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}

          <Grid container>
            <Grid item>
              <List>
                <Box>
                  <ListItemText>
                    Contacts
                  </ListItemText>
                </Box>
                <Divider />
                {emails.map(email => <ListItem><Link href={`mailto://${email}`}>{email}</Link></ListItem>)}
              </List>
            </Grid>

            <Grid item>
              <List>
                <Box>
                  <ListItemText>
                    Previous known hosts
                  </ListItemText>
                </Box>
                <Divider />
                {hosts.map(host => <ListItem><Link href={`telnet://${host}`}>{host}</Link></ListItem>)}
              </List>
            </Grid>
          </Grid>
        
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default TalkerDetails;
