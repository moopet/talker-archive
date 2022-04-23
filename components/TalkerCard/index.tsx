import BarChartIcon from '@mui/icons-material/BarChart';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HistoryIcon from '@mui/icons-material/History';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
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

const TalkerCard = ({talker : Talker}) => {
  if (talker?.websites?.length && !talker?.wayback) {
    talker.wayback = `https://web.archive.org/web/*/${talker.websites[0]}`;
  }

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');
  const slug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link href={`/details/${slug}`}>
        <Box sx={{ height: 160, backgroundColor: "black" }}>
          <CardMedia
            component="img"
            image={`/screencaps/${talker?.screencaps?.length ? talker.screencaps[0] : 'placeholder.png'}`}
            alt=""
          />
        </Box>
      </Link>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {talker.name}
        </Typography>
        <Typography>
          {talker.description}
        </Typography>
      </CardContent>

      <CardActions>
        {talker?.websites?.length && <Link href={talker.websites[0]}><LinkIcon /></Link>}
        {talker?.wayback?.length && <Link href={talker.wayback}><HistoryIcon /></Link>}
        {talker?.ewtooAbbr?.length && <Link href={`http://list.ewtoo.org/details.cgi?abbr=${talker.ewtooAbbr}`}><BarChartIcon /></Link>}
      </CardActions>
    </Card>
  );
};

export default TalkerCard;
