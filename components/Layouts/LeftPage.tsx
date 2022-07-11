import { Box } from "@mui/material";

const LeftPage = ({ children }) => {
    return (
        <Box display='flex' flexDirection='column' width={300} rowGap={2}>
            {children}
        </Box>
    )
};

export default LeftPage;