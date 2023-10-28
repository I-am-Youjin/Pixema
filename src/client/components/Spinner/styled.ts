import styled from "styled-components";

export const StyledIconWrapper = styled("div")<{ isFetching: boolean }>`
  transition: all.3s;
  display: ${(prop) => (prop.isFetching ? "flex" : "none")};
`;
