import * as React from 'react';
import * as _ from 'lodash';
import Image from 'next/image';
import {  Box, Button,  Paper } from '@mui/material';
import { getRandomInt } from '../../utils/sharedUtils';
import CollectionsIcon from '@mui/icons-material/Collections';
import { ProfileCard } from '../../types';

const ClickableGalleryImage = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ '&:hover': {  transform: "scale(1.02)" } }} borderRadius={1} border={0.5}>
                    <a href='#'>
            {children}
            </a>
        </Box>
    )
}

const CampaignGallery = ({ gallery }: { gallery: string[] }) => {
  return (
            <Paper
              elevation={8}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    // boxShadow: 4,
                    minWidth: 500,
                    maxWidth: 650,
                    // width: 650,
                    // height: 450,
                }}
            >
                <Box display='flex' flexDirection='column' rowGap={2}>
                    <Box display='flex' flexDirection='row' columnGap={2}>
                        <ClickableGalleryImage>
                            <Image src={'/' + gallery[0]} alt='Bloom image' height={400} width={400} />
                        </ClickableGalleryImage>
                        <Box display='flex' flexDirection='column' rowGap={2}>
                            <ClickableGalleryImage><Image src={'/' + gallery[1]} alt='Bloom image' height={200} width={200} /></ClickableGalleryImage>
                            <ClickableGalleryImage><Image src={'/' + gallery[2]} alt='Bloom image' height={200} width={200} /></ClickableGalleryImage>
                            <Button startIcon={<CollectionsIcon />} sx={{ minWidth: 180, }} size='large' color='secondary' variant='contained'>Explore</Button>
                        </Box>
                    </Box>
                    {/* <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                        <Typography fontStyle='italic' flexWrap={'wrap'}>© Copyright owned by Bloom, a non-profit 501.c.3 organization</Typography>
                        <Button startIcon={<CollectionsIcon />} sx={{ minWidth: 180, }} size='large' color='secondary' variant='contained'>Explore</Button>
                    </Box> */}
                </Box>
            </Paper>
  );
}

export default CampaignGallery;
