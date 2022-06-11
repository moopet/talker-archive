import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NextLink from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import slugify from 'slugify';

type TalkerCardProps = {
  talker: Talker
}

const TalkerCard = ({talker}: TalkerCardProps) => {
  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');
  const slug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

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
    </Card>
  );
};

export default TalkerCard;
