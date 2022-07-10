import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

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
              <SearchIcon />
          </IconButton>
          </Paper>
          <IconButton aria-label="sort">
              <SortIcon />
          </IconButton>
          <IconButton aria-label="filter">
              <FilterAltIcon />
          </IconButton>
      </Box>
    );
  };

  export default SearchOptions;