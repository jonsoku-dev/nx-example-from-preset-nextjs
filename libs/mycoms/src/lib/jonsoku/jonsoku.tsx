import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface JonsokuProps {}

const StyledJonsoku = styled.div`
  color: pink;
`;

export function Jonsoku(props: JonsokuProps) {
  return (
    <StyledJonsoku>
      <h1>Welcome to Jonsoku!</h1>
    </StyledJonsoku>
  );
}

export default Jonsoku;
