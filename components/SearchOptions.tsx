import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchOptions = () => {
    return (
      <Box display='flex' flexDirection='row' justifyContent={'flex-start'} columnGap={2}>
          <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
          <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search campaigns"
              inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" aria-label="search">
              <SearchRoundedIcon />
          </IconButton>
          </Paper>
          <IconButton aria-label="sort">
              <SortRoundedIcon />
          </IconButton>
          <IconButton aria-label="filter">
              <FilterAltRoundedIcon />
          </IconButton>
      </Box>
    );
  };

  export default SearchOptions;