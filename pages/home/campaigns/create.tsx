import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { Card, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
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


const useStyles = makeStyles(theme => ({
    root: {
    //   "& .MuiTextField-root": {
    //     margin: theme.spacing(1)
    //   }
    },
    textarea: {
      resize: "both"
    }
  }));

const CreateCampaign = () => {
    // const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
    const [uploading, setUploading] = useState<boolean>(false)

  

    async function uploadCampaignImage(event: any) {
        try {
            setUploading(true)
      
            if (!event.target.files || event.target.files.length === 0) {
              throw new Error('You must select an image to upload.')
            }
      
            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`
      
            let { error: uploadError } = await supabase.storage
              .from('avatars')
              .upload(filePath, file)
      
            if (uploadError) {
              throw uploadError
            }
      
            // onUpload(filePath)
          } catch (error: any) {
            alert(error.message)
          } finally {
            setUploading(false)
          }
    }

    const classes = useStyles();
    // styles import 
    // const inputBaseStyles = shadeTextFieldStylesHook.useInputBase;
    // const inputLabelStyles = shadeTextFieldStylesHook.useInputLabel;

    const formik = useFormik({
        initialValues: {
          name: '',
          description: "### your campaign goes here",
          moneyToRaise: '',
          tags: [],
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      const handleChange = (chips) => {
        return []
      }

    return (
        <HomepageLayout currentPageIndex={0}>
            <CampaignLayout currentCampaignPageIndex={1}>
                <Box display='flex' flexDirection={'column'} rowGap={2}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Create your campaign here
                </Typography>
                <Typography variant='subtitle1'>
                    Your campaign is visible to the broader Spes community, who is able to set up recurring donations to your Celo wallet. 
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    <Box display='flex' flexDirection='column' margin={4} rowGap={2}>
                    <label className="button primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
                        <Box display='flex' flexDirection='row' columnGap={2} alignItems='center'>
                            <InputWrapper titleVariant='body1' title='Campaign Name'>
                                <TextField
                                    placeholder={'Name'}
                                    id="name"
                                    name="name"
                                    sx={{ width: 500, [`& fieldset`]: {
                                        borderRadius: 0,
                                    }, }}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    required
                                />
                            </InputWrapper> 
                            <Button
                            startIcon={<UploadIcon />}
                                variant="contained"
                                color='secondary'
                                component="label"
                                size='large'
                                sx={{ textTransform: 'none' }}
                                >
                                Upload Files
                                <input
                                    type="file"
                                    hidden
                                    id="single"
                                    accept="image/*"
                                    onChange={uploadCampaignImage}
                                    disabled={uploading}
                                />
                                </Button>
                        </Box>
                        
                        <Box display='flex' flexDirection='row' columnGap={2} alignItems='flex-start'>
                            <InputWrapper titleVariant='body1' title='Campaign Description'>

                                <TextField
                                    sx={{ width: 500, [`& fieldset`]: {
                                        borderRadius: 0,
                                    }, }}
                                    id="description"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}

                                    placeholder="Description"
                                    multiline
                                    minRows={3}
                                    inputProps={{ className: classes.textarea }}
                                    required
                                />
                            </InputWrapper> 
                            <InputWrapper titleVariant={'body1'} title='Description .md preview'>
                                <Card sx={{ p: 2, width: 500 }}>
                                    <ReactMarkdown>{formik.values.description}</ReactMarkdown>
                                </Card>
                            </InputWrapper>
                        </Box>
                        <Box display='flex' flexDirection='row' columnGap={2} alignItems='flex-start'>
                        <InputWrapper titleVariant='body1' title='Looking to raise'>
                            <TextField
                            sx={{ width: 500, [`& fieldset`]: {
                                borderRadius: 0,
                            }, }}
                            id="moneyToRaise"
                            name="moneyToRaise"
                            value={formik.values.moneyToRaise}
                            onChange={formik.handleChange}
                            error={formik.touched.moneyToRaise && Boolean(formik.errors.moneyToRaise)}
                            helperText={formik.touched.moneyToRaise && formik.errors.moneyToRaise}
                            placeholder=" $ amount"
                            required
                            />
                            </InputWrapper> 
                        <InputWrapper titleVariant='body1' title='Tags'>
                           <ChipInput />
                        </InputWrapper> 
                        </Box>
                    <CampaignWalletConnect />
                    {/* <Button onClick={() => handleWalletConnect} size='large' variant='outlined' color='primary' sx={{ height: 54, border: 2, '&:hover': { border: 2 } }} startIcon={<AccountBalanceWalletIcon />}>
                        Connect to Valora
                    </Button> */}
                    </Box>

                    <Box display='flex' flexDirection='row' justifyContent='flex-end' columnGap={2}>
                        <Button size='large' color='success' variant='outlined'>Create</Button>
                        <Button size='large' color='error' variant='outlined'>Exit</Button>
                    </Box>
                </form>
                </Box>
            </CampaignLayout>
        </HomepageLayout>
    );
};

export default CreateCampaign;