import * as React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Link, Paper, Typography } from '@mui/material';
import { getRandomInt } from '../../utils/sharedUtils';
import CollectionsIcon from '@mui/icons-material/Collections';
import { profileList } from '../../utils/mockData';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ClickableGalleryImage = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ '&:hover': {  transform: "scale(1.02)" } }} borderRadius={1} border={0.5}>
                    <a href='#'>
            {children}
            </a>
        </Box>
    )
}

const CampaignGallery = () => {
  return (
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2,
                    boxShadow: 4,
                    minWidth: 500,
                    maxWidth: 650,
                    // width: 650,
                    // height: 450,
                }}
            >
                <Box display='flex' flexDirection='column' rowGap={2}>
                    <Box display='flex' flexDirection='row' columnGap={2}>
                        <ClickableGalleryImage>
                            <Image src={`/bloom/${getRandomInt(47)}.png`} alt='Bloom image' height={400} width={400} />
                        </ClickableGalleryImage>
                        <Box display='flex' flexDirection='column' rowGap={2}>
                            <ClickableGalleryImage><Image src={`/bloom/${getRandomInt(47)}.png`} alt='Bloom image' height={200} width={200} /></ClickableGalleryImage>
                            <ClickableGalleryImage><Image src={`/bloom/${getRandomInt(47)}.png`} alt='Bloom image' height={200} width={200} /></ClickableGalleryImage>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                        <Typography fontStyle='italic' flexWrap={'wrap'}>© Copyright owned by Bloom, a non-profit 501.c.3 organization</Typography>
                        <Button startIcon={<CollectionsIcon />} sx={{ minWidth: 180, }} size='large' color='secondary' variant='contained'>Explore</Button>
                    </Box>
                </Box>
            </Paper>
  );
}

export default CampaignGallery;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     cols: 2,
//   },
];
