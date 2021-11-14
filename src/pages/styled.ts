import styled from "styled-components";

export const HomePage = styled.main`
  .main-body {
    display: grid;
    grid-template-columns: 60% 39%;
    grid-column-gap: 10px;

    @media (max-width: 768px) {
      display: unset;
    }
  }
`;
