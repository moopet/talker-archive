import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Navigation from '../components/Navigation';
import ResourceList from '../components/ResourceList';

import data from '../data/talkers.json';

const ResourcesPage = () => {
  const resources = data.resources.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <Navigation title="resources" />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 1,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              This is an attempt to collect talker-related resources that might get missed on a casual web search.
            </Typography>

            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              This sort of page used to be called &quot;bookmarks&quot;, or &quot;useful links&quot; back in the day. Nobody used to read them then, either.
            </Typography>

          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ResourceList
                title="Articles"
                resources={resources.filter(resource => resource.type == "Article")}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ResourceList
                title="Community"
                resources={resources.filter(resource => ["Facebook group", "Livejournal community", "Newsgroup", "Twitter"].indexOf(resource.type) !== -1)}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ResourceList
                title="Source code"
                resources={resources.filter(resource => resource.type == "Repository")}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ResourceList
                title="Other"
  resources={resources.filter(resource => ["Article", "Facebook group", "Livejournal community","Twitter", "Newsgroup", "Repository"].indexOf(resource.type) === -1)}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default ResourcesPage;
