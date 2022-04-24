import BarChartIcon from '@mui/icons-material/BarChart';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HistoryIcon from '@mui/icons-material/History';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import slugify from 'slugify';

interface Talker {
  codebase?: string;
  description?: string;
  emails: string[];
  ewtooAbbr: string;
  hide?: boolean;
  hosts: string[];
  name: string;
  screencaps: string[];
  wayback?: string;
  websites: string[];
};

const TalkerCard = ({talker}) => {
  if (talker?.websites?.length && !talker?.wayback) {
    talker.wayback = `https://web.archive.org/web/*/${talker.websites[0]}`;
  }

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');
  const slug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <NextLink href={{pathname: "details/[slug]", query: {slug}}}>
        <a>
          <Box sx={{ height: 160, backgroundColor: "black" }}>
            <CardMedia
              component="img"
              image={`/screencaps/${talker?.screencaps?.length ? talker.screencaps[0] : 'placeholder.png'}`}
              alt=""
            />
          </Box>
        </a>
      </NextLink>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {talker.name}
        </Typography>
        <Typography>
          {talker.description}
        </Typography>
      </CardContent>

      <CardActions>
        {talker?.websites?.length > 0 && <Link href={talker.websites[0]}><LinkIcon /></Link>}
        {talker?.wayback?.length > 0 && <Link href={talker.wayback}><HistoryIcon /></Link>}
        {talker?.emails?.length > 0 && <Link href={`mailto:${talker.emails[0]}`}><EmailIcon /></Link>}
        {talker?.ewtooAbbr?.length > 0 && <Link href={`http://list.ewtoo.org/details.cgi?abbr=${talker.ewtooAbbr}`}><BarChartIcon /></Link>}
      </CardActions>
    </Card>
  );
};

export default TalkerCard;
