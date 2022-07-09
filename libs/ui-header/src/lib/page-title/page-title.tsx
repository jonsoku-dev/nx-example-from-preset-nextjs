import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PageTitleProps {}

const StyledPageTitle = styled.div`
  color: red;
`;

export function PageTitle(props: PageTitleProps) {
  return (
    <StyledPageTitle>
      <h1>Welcome to PageTitle!</h1>
    </StyledPageTitle>
  );
}

export default PageTitle;
