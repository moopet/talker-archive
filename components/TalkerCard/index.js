import BarChartIcon from '@mui/icons-material/BarChart';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import HistoryIcon from '@mui/icons-material/History';
import NextLink from 'next/link';
import Image from 'next/image';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import slugify from 'slugify';

const TalkerCard = ({talker}) => {
  if (talker?.websites?.length && !talker.hasOwnProperty('wayback')) {
    talker.wayback = `https://web.archive.org/web/*/${talker.websites[0]}`;
  }

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');
  const slug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});
  const codebaseNames = {
    amnuts: "AMNUTS",
    bolts: "BOLTS",
    crypt: "The Crypt",
    ewtoo: "EW-Too",
    ncohafmuta: "Ncohafmuta",
    nuts: "NUTS",
    pg96: "Playground '96",
    pgplus: "Playground Plus",
    rnuts: "RNUTS",
    sensi: "Sensi-Summink",
    summink: "Summink",
    talker: "Talker",
    talkernode: "TalkerNode"
  };

  return (
    <Card sx={{ maxWidth: 400, borderWidth: 1, borderStyle: "solid", borderColor: "#333" }}>
      <NextLink href={{pathname: "/details/[slug]", query: {slug}}}>
        <a>
          <Image
            src={`/screencaps/${talker?.screencaps?.length ? talker.screencaps[0] : 'placeholder.png'}`}
            alt=""
            width={640}
            height={400}
            layout="responsive"
          />

          <CardContent>
            <Typography variant="subtitle1">
              {talker.name}
            </Typography>
          </CardContent>
        </a>
      </NextLink>

      <CardActions>
        {talker?.websites?.length > 0 && <Link href={talker.websites[0]}><LinkIcon /></Link>}
        {talker?.wayback?.length > 0 && <Link href={talker.wayback}><HistoryIcon /></Link>}
        {talker?.emails?.length > 0 && <Link href={`mailto:${talker.emails[0]}`}><EmailIcon /></Link>}
        {talker?.ewtooAbbr?.length > 0 && <Link href={`http://list.ewtoo.org/details.cgi?abbr=${talker.ewtooAbbr}`}><BarChartIcon /></Link>}
    {/*
    {talker?.codebase?.length > 0 && <Chip label={codebaseNames[talker.codebase] ?? talker.codebase} variant="outlined" />}
    */}
      </CardActions>
    </Card>
  );
};

export default TalkerCard;
