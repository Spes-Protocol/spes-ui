import { Alert, Fade, Box, MenuItem, OutlinedInput, Paper, Select, Button, Typography, InputAdornment, RadioGroup, FormControlLabel, Radio, FormControl } from "@mui/material";
import { Formik, Form } from "formik";
import * as _ from 'lodash';
import palette from "../themes/palette";
import InputWrapper from "./InputWrapper";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import moment from "moment";

const CreatePledgeCard = () => {
  const initialValues = {
    currency: "USD",
    amount: 30,
    cadenceType: '',
    cadenceUnit: 'MONTHLY',
    cadenceValue: 1,
  };

  const createPledgeSummary = (values) => {
      return (
      <Fade in timeout={700}>
        <Alert icon={false} severity="success">
          <Typography variant='body1'>
          You are set to donate to this cause {_.toLower(values.cadenceUnit)}, {values.cadenceValue} times for a set amount of {values.currency} {values.amount}. You can change your pledge at any time from the dashboard. Your first payment is on {moment().add('days', 2).format('LL')}

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
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.cadenceUnit}
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
                          placeholder={'Donation amount'}
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
      alert(JSON.stringify(values, null, 2));
  }

    return (
      <Fade in timeout={500}>
        <Paper elevation={8} sx={{
            maxWidth: 400, p: 3, display: 'flex', flexDirection: 'column', rowGap: 2 }}>
              <Typography variant='h4'>Your pledge</Typography>
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleChange, values, setFieldValue, touched, errors }) => (
                  <Form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap:2,}}>
                    <InputWrapper title={'Currency'} titleVariant={'body2'}>
                      <Select
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
                          placeholder={'Donation amount'}
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
                    <InputWrapper title={'Pledge type'} titleVariant={'body2'}>
                    <RadioGroup
                      row
                      // defaultValue="RECURRING"
                      name={'cadenceType'}
                      value={values.cadenceType}
                      onChange={e => {
                        setFieldValue('cadenceType', e.target.value);
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
                    </InputWrapper>
                    {values.cadenceType === 'RECURRING' ? Recurring(handleChange, values, setFieldValue, touched, errors) : null}
                    {values.cadenceType != '' ? createPledgeSummary(values) : null}
                    <Button onClick={() => onSubmit} size='large' startIcon={<VolunteerActivismIcon />} variant='outlined' color='error' sx={{ letterSpacing: 1.5 }}>Checkout</Button>
                    </Box>
                  </Form>
              )}</Formik>
          </Paper>
      </Fade>
    )
  }

export default CreatePledgeCard;