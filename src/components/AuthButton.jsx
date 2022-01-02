import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const AuthButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 18,
  padding: "6px 12px",
  lineHeight: 1.5,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Urbanist",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ].join(","),
});

export default AuthButton;
