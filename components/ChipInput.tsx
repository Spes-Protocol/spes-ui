import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const top100Tags = [
    'charity',
    'UN',
    'volunteer',
    'campaign',
    'impact',
    'earth science',
    'climate science',
    'hunger',
    'poverty',
    'global hunger',
    'rebuild',
    'social development',
    'architecture',
    'urban planning',
    'community building',
    'economy',
    'poverty line',
    'uplift',
    'peace',
    'world peace',
    'military',
    'refugee',
    'war',
    'food',
    'water',
    'shelter'
]

const ChipInput: React.FC<{ onChange: (event: React.ChangeEvent<HTMLInputElement>, newValue: string[]) => void }> = ({ onChange })  => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Tags}
      disableCloseOnSelect
      onChange={onChange}
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField sx={{ width: 500, [`& fieldset`]: {
            borderRadius: 0,
          }, }} {...params} placeholder="Campaign tags" />
      )}
    />
  );
}

export default ChipInput;