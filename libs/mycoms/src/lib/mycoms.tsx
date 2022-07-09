import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MycomsProps {}

const StyledMycoms = styled.div`
  color: pink;
`;

export function Mycoms(props: MycomsProps) {
  return (
    <StyledMycoms>
      <h1>Welcome to Mycoms!</h1>
    </StyledMycoms>
  );
}

export default Mycoms;
