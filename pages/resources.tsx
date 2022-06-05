import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Navigation from '../components/Navigation';
import ResourceList from '../components/ResourceList';

import { resources } from '../data/talkers.json';

const ResourcesPage = () => {
  const resourceTypes = {
    article: [
      "article",
    ],
    community: [
      "livejournal community",
      "facebook group",
      "twitter",
      "newsgroup",
    ],
    sourceCode: [
      "repository",
    ],
    other: [
      "hosting",
      "fandom entry",
      "website",
    ],
  };

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
                resources={resources.filter(resource => resourceTypes.article.includes(resource.type.toLowerCase()))}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ResourceList
                title="Community"
                resources={resources.filter(resource => resourceTypes.community.includes(resource.type.toLowerCase()))}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ResourceList
                title="Source code"
                resources={resources.filter(resource => resourceTypes.sourceCode.includes(resource.type.toLowerCase()))}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ResourceList
                title="Other"
                resources={resources.filter(resource => resourceTypes.other.includes(resource.type.toLowerCase()))}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default ResourcesPage;
