import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import slugify from 'slugify';

import ContactList from '../../components/ContactList';
import Hero from '../../components/Hero';
import HostList from '../../components/HostList';
import Navigation from '../../components/Navigation';
import ResourceList from '../../components/ResourceList';
import ScreenCapturesList from '../../components/ScreenCapturesList';
import WebsiteList from '../../components/WebsiteList';
import data from '../../data/talkers.json';

interface DataOrigin {
  name: string
}

interface Resource {
  name: string,
  'type': string,
  url: string
}

interface Codebase {
  name: string,
  family?: string,
  platform?: string,
  repo?: string
}

interface Talker {
  adult?: boolean,
  codebase?: string,
  dataOrigin?: string,
  description?: string,
  emails?: string[],
  ewtooAbbr?: string,
  hosts?: string[]
  name: string,
  resources?: Resource[]
  screencaps?: string[],
  textcaps?: string[],
  wayback?: string[],
  websites?: string[],
}

interface Data {
  codebases: Codebase[],
  dataOrigins: DataOrigin[],
  resources: Resource[],
  talkers: Talker[]
}

const TalkerDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');

  const talkers: Talker[] = data.talkers.filter(talker => {
    const testSlug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

    return !talker?.hide && testSlug == slug;
  });

  if (talkers.length === 0) {
    return;
  }

  const talker: Talker = talkers[0];

  const emails: string[] = talker?.emails ?? [];
  const hosts: string[] = talker?.hosts ?? [];
  let resources: Resource[] = talker?.resources ?? [];
  const screencaps: string[] = talker?.screencaps ?? [];
  const screencap: string = `/screencaps/${screencaps.length > 0 ? screencaps[0] : 'placeholder.png'}`;
  const waybackUrls: string[] = talker?.wayback ?? [];

  if (talker?.ewtooAbbr) {
    const ewtooUrl = `http://list.ewtoo.org/details.cgi?abbr=${talker.ewtooAbbr}`;

    resources = resources.filter(resource => resource.url != ewtooUrl);

    resources.push({
      name: talker.name,
      type: "Grim's list entry",
      url: ewtooUrl
    });
  }

  if (waybackUrls.length > 0) {
    resources = resources.filter(resource => !waybackUrls.includes(resource.url));

    waybackUrls.forEach(url => {
      resources.push({
        name: "Website snapshot",
        type: "Wayback machine archive",
        url
      });
    });
  }

  let citation = '';

  if (talker?.dataOrigin?.length > 0 && data.dataOrigins.hasOwnProperty(talker.dataOrigin)) {
    citation = `Information presented here was - at least in part - provided by ${data.dataOrigins[talker.dataOrigin].name}.`
  }

  let codeDescription = '';

  if (talker?.codebase) {
    codeDescription = `The talker is (was?) based on ${talker.codebase}.`;

    if (data.codebases.hasOwnProperty(talker.codebase)) {
      const codebaseInfo = data.codebases[talker.codebase];

      codeDescription = `The talker is (was?) based on ${codebaseInfo.name}`;

      if (codebaseInfo.hasOwnProperty('family')) {
        codeDescription += `, a ${data.codebases[codebaseInfo.family].name} derivative`;
      }
    }
  }

  return (
    <>
      <Navigation title={talker.name} />

      <main>
        <Hero
          title={talker.name}
          subtitle={talker.description ?? "There doesn't seem to be any description here..."}
          image={screencap}
        />

        <Container sx={{ py: 2 }} maxWidth="xl">
          {codeDescription &&
            <Typography variant="body2" color="text.secondary" paragraph>
              {codeDescription}.
            </Typography>
          }

          {codeDescription &&
            <Typography variant="body2" color="text.secondary" paragraph>
              {citation}
            </Typography>
          }

          <Typography variant="body2" color="text.secondary" paragraph>
            It&apos;s <em>highly</em> likely that most of the links presented here haven&apos;t worked for years.
          </Typography>

          <Grid container sx={{ marginTop: 4}} spacing={3} justifyContent="flex-start">
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <HostList hosts={talker?.hosts ?? []} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <ContactList contacts={talker?.emails ?? []} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <WebsiteList websites={talker?.websites ?? []} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <ResourceList resources={resources} />
            </Grid>

            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
              <ScreenCapturesList screencaps={talker?.screencaps ?? []} />
            </Grid>

          </Grid>
        </Container>
      </main>
    </>
  );
};

TalkerDetails.getInitialProps = ({ query }) => ({
    key: query.slug
});

export default TalkerDetails;
