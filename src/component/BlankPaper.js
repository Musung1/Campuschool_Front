import { styled, Paper } from "@mui/material";
export const BlankPaper = styled(Paper)(({ theme }) => ({
  height: 1000,
  padding: theme.spacing(2),
  ...theme.typography.h2,
  textAlign: "center",
  margin: 10,
}));
