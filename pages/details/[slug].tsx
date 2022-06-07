import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import slugify from 'slugify';

import Hero from '../../components/Hero';
import HostList from '../../components/HostList';
import Navigation from '../../components/Navigation';
import ResourceList from '../../components/ResourceList';
import ScreenCapturesList from '../../components/ScreenCapturesList';

import dataRaw from '../../data/talkers.json';

interface Codebase {
  name: string,
  family?: string,
  language?: string,
  platform?: string,
  shortName?: string
  repo?: string,
  url?: string
}

interface DataOrigin {
  name: string,
  shortName?: string
}

interface Host {
  hostname: string,
  port?: number
}

interface Resource {
  name?: string,
  'type': string,
  url: string,
  description?: string,
  icon?: string
}

interface Talker {
  name: string,
  adult?: boolean,
  codebase?: string,
  dataOrigin?: string,
  description?: string,
  ewtooAbbr?: string,
  hide?: boolean,
  hosts?: Host[],
  resources: Resource[]
  screencaps?: string[],
  textcaps?: string[],
}

interface Data {
  codebases: Codebase[],
  dataOrigins: DataOrigin[],
  resources: Resource[],
  talkers: Talker[]
}

const data: Data = dataRaw;

const getCodebase = (codebaseName: string): Codebase => {
  const codebaseMatches = data.codebases.filter(item => item.shortName === codebaseName);

  if (codebaseMatches.length === 1) {
    return codebaseMatches[0];
  }

  const naiveCodebase : Codebase = {
    name: codebaseName,
    shortName: codebaseName
  };

  return naiveCodebase;
}

const getDataOrigin = (dataOriginName: string): DataOrigin => {
  const dataOriginMatches = data.dataOrigins.filter(item => item.shortName === dataOriginName);

  if (dataOriginMatches.length === 1) {
    return dataOriginMatches[0];
  }

  const naiveDataOrigin: DataOrigin = {
    name: dataOriginName,
    shortName: dataOriginName
  };

  return naiveDataOrigin;
}

const TalkerDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { talkers } = data;

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');

  const matchingTalkers: Talker[] = talkers.filter(talker => {
    const testSlug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

    return !talker?.hide && testSlug == slug;
  });

  if (matchingTalkers.length === 0) {
    return;
  }

  const talker: Talker = matchingTalkers[0];

  let resources: Resource[] = talker?.resources ?? [];
  const screencaps: string[] = talker?.screencaps ?? [];
  const screencap: string = `/screencaps/${screencaps.length > 0 ? screencaps[0] : 'placeholder.png'}`;

  let citation: string = '';
  let codebaseDescription: string = '';
  let codebase: Codebase | null = null;
  let dataOrigin: DataOrigin | null = null;

  if (talker?.dataOrigin) {
    dataOrigin = getDataOrigin(talker.dataOrigin);
  }

  if (dataOrigin) {
    citation = `Information presented here was - at least in part - sourced from ${dataOrigin.name}.`
  }

  if (talker?.codebase) {
    codebase = getCodebase(talker.codebase);
  }

  if (codebase !== null) {
    codebaseDescription = `The talker is (was?) based on the codebase, "${codebase.name}"`;
  }

  if (codebase && codebase?.family) {
    codebaseDescription += `, a ${getCodebase(codebase.family).name} derivative`;
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
          {codebaseDescription &&
            <Typography variant="body2" color="text.secondary" paragraph>
              {codebaseDescription}.
            </Typography>
          }

          {citation &&
            <Typography variant="body2" color="text.secondary" paragraph>
              {citation}
            </Typography>
          }

          <Typography variant="body2" color="text.secondary" paragraph>
            It&apos;s <em>highly</em> likely that most of the links presented here haven&apos;t worked for years.
          </Typography>


          <Grid container sx={{ marginTop: 4}} spacing={3} justifyContent="flex-start">
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <HostList title="Hosts" hosts={talker.hosts ?? []} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <ResourceList title="Contacts" resources={talker.resources.filter(resource => resource.type === 'email')} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <ResourceList title="Websites" resources={talker.resources.filter(resource => ['website', 'wayback'].includes(resource.type))} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <ResourceList resources={talker.resources.filter(resource => !['email', 'website', 'wayback'].includes(resource.type))} />
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

TalkerDetails.getInitialProps = ({ query }: NextPageContext) => ({
    key: query.slug
});

export default TalkerDetails;
