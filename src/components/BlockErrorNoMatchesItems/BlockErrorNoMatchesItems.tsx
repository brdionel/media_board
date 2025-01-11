import { Box, Typography } from "@mui/material";

const BlockErrorNoMatchesItems = () => {
  return (
    <Box
      sx={{
        minHeight: "100px",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "var(--color-white)",
          fontSize: "12px",
        }}
      >
        Your filter by release year did not have any matches.
      </Typography>
    </Box>
  );
};

export default BlockErrorNoMatchesItems;
