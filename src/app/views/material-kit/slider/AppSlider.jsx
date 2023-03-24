import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import ContinuousSlider from "./ContinuousSlider";
import DiscreteSlider from "./DiscreteSlider";
import InputSlider from "./InputSlider";
import RangeSlider from "./RangeSlider";
import VerticalSlider from "./VerticalSlider";

import Prueba from "./prueba"

const Container = styled("div")(({ theme }) => ({
  width: "1200px !important",
  height: "600px !important",
  overflow: 'hidden',
  background: 'white',
  boxShadow: '10px 10px 10px 5px gray',
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppSlider = () => {
  return (
    <Container >
      
      <Prueba></Prueba>
      
    </Container>
  );
};

export default AppSlider;
