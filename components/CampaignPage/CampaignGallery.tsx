import * as React from 'react';
import * as _ from 'lodash';
import Image from 'next/image';
import {  Box, Button,  Modal,  Paper } from '@mui/material';
import { getRandomInt } from '../../utils/sharedUtils';
import CollectionsIcon from '@mui/icons-material/Collections';
import palette from '../../themes/palette';
import GalleryModal from '../Modals/GalleryModal';

const ClickableGalleryImage = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ '&:hover': {  transform: "scale(1.02)" } }} borderRadius={1} border={0.5}>
                    <a href='#'>
            {children}
            </a>
        </Box>
    )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};


const CampaignGallery = ({ gallery }: { gallery: string[] }) => {
  const [openGallery, setOpenGallery] = React.useState(false);
  return (
                <Box sx={{ display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    // boxShadow: 4,
                    minWidth: 500,
                    maxWidth: 650, }}>
                    <Box display='flex' flexDirection='row' columnGap={2}>
                        <ClickableGalleryImage>
                            <Image src={'/' + gallery[0]} alt='Bloom image' height={400} width={400} />
                        </ClickableGalleryImage>
                        <Box display='flex' flexDirection='column' rowGap={2}>
                            <ClickableGalleryImage><Image src={'/' + gallery[1]} alt='Bloom image' height={200} width={200} /></ClickableGalleryImage>
                            <ClickableGalleryImage><Image src={'/' + gallery[2]} alt='Bloom image' height={200} width={200} /></ClickableGalleryImage>
                            <Button startIcon={<CollectionsIcon />} sx={{ minWidth: 180, letterSpacing: 1.5 }} size='large' color='secondary' variant='contained' onClick={() => setOpenGallery(true)}>Explore</Button>
                            <Modal
                              open={openGallery}
                              onClose={() => setOpenGallery(false)}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <GalleryModal gallery={gallery} />
                              </Box>
                            </Modal>
                        </Box>
                    </Box>
                    {/* <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                        <Typography fontStyle='italic' flexWrap={'wrap'}>© Copyright owned by Bloom, a non-profit 501.c.3 organization</Typography>
                        <Button startIcon={<CollectionsIcon />} sx={{ minWidth: 180, }} size='large' color='secondary' variant='contained'>Explore</Button>
                    </Box> */}
                </Box>
            // </Paper>
  );
}

export default CampaignGallery;
