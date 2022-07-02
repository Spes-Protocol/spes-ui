import { Alert, Fade, Box, MenuItem, OutlinedInput, Paper, Select, Button, Typography, InputAdornment, RadioGroup, FormControlLabel, Radio, FormControl, Chip, Slide } from "@mui/material";
import { Formik, Form } from "formik";
import * as _ from 'lodash';
import palette from "../themes/palette";
import InputWrapper from "./InputWrapper";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import moment from "moment";
import { useState } from "react";

const CreatePledgeCard = () => {
  const [cadenceTypeError, setCadenceTypeError] = useState<boolean>(false);

  const CadenceRequired = () => {
    return (
      <Slide direction="right" in={cadenceTypeError} mountOnEnter unmountOnExit>
        <Chip size='small' icon={<PriorityHighIcon />} label="Required" color="info" variant='outlined' />
      </Slide>
    )
  }

  const initialValues = {
    currency: 'USD',
    amount: '',
    cadenceType: '',
    cadenceUnit: '',
    cadenceValue: '',
  };

  const createPledgeSummary = (values) => {
    const recurringMessage = `You are set to donate to this cause ${_.toLower(values.cadenceUnit)}, ${values.cadenceValue} times for a set amount of ${values.currency} ${values.amount}.`;
    const singleMessage = `You are set to donate to this cause a set amount of ${values.currency} ${values.amount}.`;
    const commonMessage = `You can also update your pledge at any time from the dashboard. Your first payment will be scheduled for ${moment().add('days', 2).format('LL')} on checkout.`
      return (
      <Fade in timeout={700}>
        <Alert icon={false} severity="success">
          <Typography variant='body1'>
          {values.cadenceType === 'RECURRING' ? recurringMessage : singleMessage} {commonMessage}
          </Typography>
        </Alert>
      </Fade>
      )
  }

  const Recurring = (handleChange, values, setFieldValue, touched, errors) => {
    return (
      <>
        <InputWrapper title={'Cadence Unit'} titleVariant={'body2'}>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.cadenceUnit}
                        defaultValue='USD'
                        label="Cadence Unit"
                        onChange={e => {
                          setFieldValue('cadenceUnit', e.target.value);
                        }}
                      >
                        <MenuItem key={'WEEKLY'} value={'WEEKLY'}>weekly</MenuItem>
                        <MenuItem key={'MONTHLY'} value={'MONTHLY'}>monthly</MenuItem>
                        <MenuItem key={'QUARTERLY'} value={'QUARTERLY'}>quarterly</MenuItem>
                        <MenuItem key={'YEARLY'} value={'YEARLY'}>yearly</MenuItem>
                      </Select>
                    </InputWrapper>
                    
                    <InputWrapper title={'Cadence Value'} titleVariant={'body2'}>
                      <OutlinedInput
                          startAdornment={<InputAdornment position="start"><EventAvailableIcon /></InputAdornment>}
                          placeholder={'eg. 2 times per month'}
                          id="cadenceValue"
                          name="cadenceValue"
                          // sx={{ [`& fieldset`]: {
                          //     borderRadius: 0,
                          // }, }}
                          value={values.cadenceValue}
                          onChange={handleChange}
                          error={touched.cadenceValue && Boolean(errors.cadenceValue)}
                          required
                      />
                    </InputWrapper>
      </>
    )
  }

  const onSubmit = (values) => {
    if (!values.cadenceType) {
        setCadenceTypeError(true);
    } else {
      setCadenceTypeError(false);
      alert(JSON.stringify(values, null, 2));
    }
  }

    return (
      <Fade in timeout={500}>
        <Paper elevation={1} sx={{
            maxWidth: 400, p: 3, display: 'flex', flexDirection: 'column', rowGap: 2 }}>
              <Typography variant='h4'>Your pledge</Typography>
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleChange, values, setFieldValue, touched, errors }) => (
                  <Form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap:2,}}>
                    <InputWrapper title={'Currency'} titleVariant={'body2'}>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.currency}
                        label="Currency"
                        name='currency'
                        onChange={e => {
                          setFieldValue('currency', e.target.value);
                        }}
                      >
                        <MenuItem key={'USD'} value={'USD'}>$ usd</MenuItem>
                        <MenuItem key={'REAL'} value={'REAL'}>R$ real</MenuItem>
                        <MenuItem key={'EURO'} value={'EURO'}>€ euro</MenuItem>
                      </Select>
                    </InputWrapper>
                    
                    <InputWrapper title={'Choose your donation amount'} titleVariant={'body2'}>
                      <OutlinedInput
                          startAdornment={<InputAdornment position="start">{values.currency === 'USD' ? '$' : values.currency === 'REAL' ? 'R$' : '€'}</InputAdornment>}
                          placeholder={'30'}
                          id="amount"
                          name="amount"
                          // sx={{ [`& fieldset`]: {
                          //     borderRadius: 0,
                          // }, }}
                          value={values.amount}
                          onChange={handleChange}
                          error={touched.amount && Boolean(errors.amount)}
                          required
                      />
                    </InputWrapper>
                    <Box display='flex' flexDirection='column' rowGap={1}>
                      <Box display='flex' flexDirection='row' columnGap={2} alignItems='center'>
                        <Typography letterSpacing={1} variant={'body2'}>{'Pledge Type'}</Typography>
                        <CadenceRequired />
                      </Box>
                      <FormControl required>
                        <RadioGroup
                        row
                        aria-required
                        // defaultValue="RECURRING"
                        name={'cadenceType'}
                        value={values.cadenceType}
                        onChange={e => {
                          setFieldValue('cadenceType', e.target.value);
                          setCadenceTypeError(false);
                        }}
                      >
                        <FormControlLabel value="RECURRING" control={<Radio color="error" />} label="Recurring" />
                        <FormControlLabel value="SINGLE" control={<Radio color='error' />} label="Single" />
                        <FormControlLabel
                          value="disabled"
                          disabled
                          control={<Radio />}
                          label="Challenge"
                        />
                      </RadioGroup>
                      </FormControl>
                    </Box>
                    {values.cadenceType === 'RECURRING' ? Recurring(handleChange, values, setFieldValue, touched, errors) : null}
                    {values.cadenceType != '' ? createPledgeSummary(values) : null}
                    <Button type='submit' onClick={() => onSubmit} size='large' startIcon={<VolunteerActivismIcon />} variant='outlined' color='error' sx={{ letterSpacing: 1.5 }}>Checkout</Button>
                    </Box>
                  </Form>
              )}</Formik>
          </Paper>
      </Fade>
    )
  }

export default CreatePledgeCard;