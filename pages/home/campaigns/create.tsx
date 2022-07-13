import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { Card, Dialog, DialogActions, DialogContent, DialogTitle, OutlinedInput, Paper, TextField } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import { shadeTextFieldStylesHook } from '../../../styles/textFieldShade';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import UploadIcon from '@mui/icons-material/Upload';
import CampaignWalletConnect from '../../../components/CampaignWalletConnect';
import HomepageLayout from '../../../components/Layouts/HomepageLayout';
import CampaignLayout from '../../../components/Layouts/CampaignLayout';
import palette from '../../../themes/palette';
import InputWrapper from '../../../components/InputWrapper';
import ChipInput from '../../../components/ChipInput';
import { makeStyles } from '@mui/styles';
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient'
import AntSwitch from '../../../components/AntSwitch';
import Avatar from '../../../components/Avatar';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

const CreateCampaign = () => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [markdownPreviewToggle, setMarkdownPreviewToggle] = useState<boolean>(false);

    const handleMarkdownPreviewToggle = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        setMarkdownPreviewToggle(event.target.checked);
      };
  
    // async function uploadCampaignImage(event: any) {
    //     try {
    //         setUploading(true)
      
    //         if (!event.target.files || event.target.files.length === 0) {
    //           throw new Error('You must select an image to upload.')
    //         }
      
    //         const file = event.target.files[0]
    //         const fileExt = file.name.split('.').pop()
    //         const fileName = `${Math.random()}.${fileExt}`
    //         const filePath = `${fileName}`
      
    //         let { error: uploadError } = await supabase.storage
    //           .from('avatars')
    //           .upload(filePath, file)
      
    //         if (uploadError) {
    //           throw uploadError
    //         }
      
    //         // onUpload(filePath)
    //       } catch (error: any) {
    //         alert(error.message)
    //       } finally {
    //         setUploading(false)
    //       }
    // }

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    }

    const initialValues = {
        name: "",
        markdownDescription: "## your campaign goes here\n### share your story\n",
        description: "",
        moneyToRaise: "",
        tags: [],
      };

    return (
        <HomepageLayout currentPageIndex={0}>
            <CampaignLayout currentCampaignPageIndex={1}>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' rowGap={3}>
                    <Box>
                    <Typography id="modal-modal-title" variant="h4">
                    Create your campaign here
                </Typography>
                <Typography variant='subtitle1'>
                    Your campaign is visible to the broader Spes community, who is able to set up recurring donations to your Celo wallet. 
                </Typography>
                        </Box>
                
                <Paper elevation={4} sx={{ maxWidth: 600, p: 3, display: 'flex', flexDirection:'column', rowGap: 2, alignItems:'center' }}>
                {/* <Box > */}
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {({ handleChange, values, setFieldValue, touched, errors }) => (
                            <Form>
                                <Box display='flex' flexDirection='column' rowGap={4}>
                                    <InputWrapper titleVariant='body1' title='Your Campaign Name'>
                                        <TextField
                                            placeholder={'A campaign name that captures your mission'}
                                            id="name"
                                            name="name"
                                            sx={{ width: 500, 
                                            //     [`& fieldset`]: {
                                            //     borderRadius: 0,
                                            // }, 
                                        }}
                                            value={values.name}
                                            onChange={handleChange}
                                            error={touched.name && Boolean(errors.name)}
                                            required
                                        />
                                    </InputWrapper> 
                                    <InputWrapper titleVariant='body1' title='A short description'>
                                        <TextField
                                            placeholder={'A short blurb describing what you are raising money for'}
                                            id="description"
                                            name="description"
                                            sx={{ width: 500, 
                                                //     [`& fieldset`]: {
                                                //     borderRadius: 0,
                                                // }, 
                                            }}
                                            value={values.description}
                                            onChange={handleChange}
                                            error={touched.description && Boolean(errors.description)}
                                            required
                                        />
                                    </InputWrapper>                             
                                        <Box display='flex' flexDirection='column' rowGap={1}>
                                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' columnGap={1}>
                                                <Typography letterSpacing={1} variant='body1'>{'Your Campaign Story'}</Typography>
                                                <Box display='flex' flexDirection='row' columnGap={1}>
                                                    <AntSwitch toggle={markdownPreviewToggle} toggleHandler={handleMarkdownPreviewToggle()}  />{markdownPreviewToggle ? 'Disable' : 'Enable'}{' markdown preview'}
                                                </Box>
                                            </Box>
                                            {markdownPreviewToggle ? <Card sx={{ p: 2, width: 500 }}>
                                                    <ReactMarkdown>{values.markdownDescription}</ReactMarkdown>
                                                </Card> : <TextField
                                                    sx={{ width: 500, 
                                                        //     [`& fieldset`]: {
                                                        //     borderRadius: 0,
                                                        // }, 
                                                    }}
                                                    id="markdownDescription"
                                                    name="markdownDescription"
                                                    value={values.markdownDescription}
                                                    onChange={handleChange}
                                                    error={touched.markdownDescription && Boolean(errors.markdownDescription)}

                                                    placeholder="Share your campaign's story"
                                                    multiline
                                                    minRows={10}
                                                /> }
                                        </Box>
                                        <Avatar
                                            url={avatarUrl}
                                            size={150}
                                            onUpload={(url) => {
                                                setAvatarUrl(url)
                                                // updateProfile({ username, website, avatar_url: url })
                                            }}
                                        />
                                    <InputWrapper titleVariant='body1' title='Looking to raise'>
                                        <OutlinedInput
                                        sx={{ width: 500, 
                                            //     [`& fieldset`]: {
                                            //     borderRadius: 0,
                                            // }, 
                                        }}
                                        id="moneyToRaise"
                                        name="moneyToRaise"
                                        value={values.moneyToRaise}
                                        onChange={handleChange}
                                        error={touched.moneyToRaise && Boolean(errors.moneyToRaise)}
                                        placeholder=" dollar amount"
                                        startAdornment={<AttachMoneyRoundedIcon sx={{ color:'gray'}} />}
                                        required
                                        />
                                    </InputWrapper> 
                                    <InputWrapper titleVariant='body1' title='Tags'>
                                        <ChipInput onChange={(e, value) => {
                                            setFieldValue(
                                                "tags",
                                                value
                                            );
                                        }} />
                                    </InputWrapper> 
                                    <CampaignWalletConnect />
                                    {/* <Box display='flex' flexDirection='row' justifyContent='flex-end' columnGap={2}>
                                        <Button sx={{ letterSpacing: 1.5, border: 2, '&:hover': { border: 2 }}} type='submit' size='large' color='success' variant='outlined'>Create</Button>
                                        <Button sx={{ letterSpacing: 1.5, border: 2, '&:hover': { border: 2 }}}  type='submit' size='large' color='error' variant='outlined'>Exit</Button>
                                    </Box> */}
                                </Box>
                            </Form>
                )}
                    </Formik>
                {/* </Box> */}
                </Paper>
                <Box display='flex' flexDirection='row' justifyContent='flex-end' columnGap={2}>
                                        <Button sx={{ letterSpacing: 1.5, border: 2, '&:hover': { border: 2 }}} type='submit' size='large' color='success' variant='outlined'>Create</Button>
                                        <Button sx={{ letterSpacing: 1.5, border: 2, '&:hover': { border: 2 }}}  type='submit' size='large' color='error' variant='outlined'>Exit</Button>
                                    </Box>
                </Box>
                
            </CampaignLayout>
        </HomepageLayout>
    );
};

export default CreateCampaign;