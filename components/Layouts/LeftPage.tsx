import { Box } from "@mui/material";

const LeftPage = ({ children }) => {
    return (
        <Box display='flex' flexDirection='column' flexGrow={1} rowGap={2}>
            {children}
        </Box>
    )
};

export default LeftPage;