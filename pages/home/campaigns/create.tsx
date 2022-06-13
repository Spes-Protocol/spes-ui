import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { shadeTextFieldStylesHook } from '../../../styles/textFieldShade';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CampaignWalletConnect from '../../../components/CampaignWalletConnect';
import HomepageLayout from '../../../components/Layouts/HomepageLayout';
import CampaignLayout from '../../../components/Layouts/CampaignLayout';
import palette from '../../../themes/palette';


const CreateCampaign = () => {

    // styles import 
    // const inputBaseStyles = shadeTextFieldStylesHook.useInputBase;
    // const inputLabelStyles = shadeTextFieldStylesHook.useInputLabel;

    const formik = useFormik({
        initialValues: {
          name: '',
          description: '',
          moneyToRaise: 0,
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <HomepageLayout currentPageIndex={0}>
            <CampaignLayout currentCampaignPageIndex={1}>
                <Box display='flex' flexDirection={'column'} rowGap={2}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Create your campaign here
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Your campaign is visible to the broader Spes community, who is able to set up recurring donations to your Celo wallet. 
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    <Box display='flex' flexDirection='column' margin={4} rowGap={2}>
                    <TextField
                    label={'Campaign Name'}
                    placeholder={'Name'}
                    margin={'normal'}
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    required
                    // InputLabelProps={{ shrink: true, classes: inputLabelStyles(palette) }}
                    // InputProps={{ classes: inputBaseStyles(palette), disableUnderline: true }}
                />
                <TextField
                    // fullWidth
                    label={'Campaign description'}
                    margin={'normal'}

                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}

                    placeholder="Description"
                    multiline
                    rows={3}
                    required
                    // InputLabelProps={{ shrink: true, classes: inputLabelStyles(palette) }}
                    // InputProps={{ classes: inputBaseStyles(palette), disableUnderline: true }}
                />
                    <TextField
                        label={'$ looking to raise '}
                        margin={'normal'}

                        id="moneyToRaise"
                        name="moneyToRaise"
                        value={formik.values.moneyToRaise}
                        onChange={formik.handleChange}
                        error={formik.touched.moneyToRaise && Boolean(formik.errors.moneyToRaise)}
                        helperText={formik.touched.moneyToRaise && formik.errors.moneyToRaise}

                        placeholder=" $ amount"
                        required
                        // InputLabelProps={{ shrink: true, classes: inputLabelStyles(palette) }}
                        // InputProps={{ classes: inputBaseStyles(palette), disableUnderline: true }}
                    />
                    <CampaignWalletConnect />
                    {/* <Button onClick={() => handleWalletConnect} size='large' variant='outlined' color='primary' sx={{ height: 54, border: 2, '&:hover': { border: 2 } }} startIcon={<AccountBalanceWalletIcon />}>
                        Connect to Valora
                    </Button> */}
                    </Box>

                    <Box display='flex' flexDirection='row' justifyContent='flex-end' columnGap={2}>
                        <Button size='medium' color='success' variant='outlined'>Create</Button>
                        <Button size='medium' color='error' variant='outlined'>Exit</Button>
                    </Box>
                </form>
                </Box>
            </CampaignLayout>
        </HomepageLayout>
    );
};

export default CreateCampaign;