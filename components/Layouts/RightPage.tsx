import { Box } from "@mui/material";

const RightPage = ({ children }) => {
    return (
        <Box display='flex' flexDirection='column' flexGrow={8} rowGap={2}>
            {children}
        </Box>
    )
};

export default RightPage;