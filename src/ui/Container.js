import styled from "styled-components";
import { Box } from "grid-styled";

const Container = styled(Box)`
  max-width: 1920px;
`;
Container.defaultProps = {
  mx: "auto"
};

export default Container;
