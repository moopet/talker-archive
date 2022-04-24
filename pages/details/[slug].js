import { useRouter } from 'next/router';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import slugify from 'slugify';

import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import data from '../../data/talkers.json';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const TalkerDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');

  const talkers = data.talkers.filter(talker => {
    const testSlug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

    return !talker?.hide && testSlug == slug;
  });

  if (!talkers.length) {
    return;
  }

  const talker = talkers[0];

  const emails = talker?.emails ?? [];
  const hosts = talker?.hosts ?? [];
  const screencap = `/screencaps/${talker?.screencaps?.length ? talker.screencaps[0] : 'placeholder.png'}`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <Link href="/">
            <ChatIcon sx={{ mr: 2 }} />
          </Link>
          <Typography variant="h1" sx={{ fontSize: "1rem" }} color="inherit" noWrap>
            Talker archive: {talker.name}
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Hero
          title={talker.name}
          subtitle={talker.description ?? "There doesn't seem to be any description here..."}
          image={screencap}
        />

        <Container sx={{ py: 8 }} maxWidth="xl">
          <Grid container spacing={3} justifyContent="space-between">

            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
              <List>
                  <ListItemText>
                    Previous known hosts
                  </ListItemText>
                <Divider />
                {hosts.map((host, index) => <ListItem key={`telnet-${index}`}><Link href={`telnet://${host}`}>{host}</Link></ListItem>)}
              </List>
            </Grid>

            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
              <List>
                  <ListItemText>
                    Contacts
                  </ListItemText>
                <Divider />
                {emails.map((email, index) => <ListItem key={`email-${index}`}><Link href={`mailto://${email}`}>{email}</Link></ListItem>)}
              </List>
            </Grid>

            <Grid item xl={4} lg={3} md={4} sm={6} xs={12} >
              <List>
                  <ListItemText>
                    Other screen captures
                  </ListItemText>
                <Divider />
    {talker.screencaps.slice(1).map((screencap, index) => <ListItem key={`screencap-${index}`}><img src={`/screencaps/${screencap}`} alt="" /></ListItem>)}
              </List>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
};

export default TalkerDetails;

