import styled from "styled-components";

export const MapStyle = styled.section`
  background-color: ${({ theme }) => theme.panelBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 1rem;
`;

export const MapHeader = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 32%;

  background: ${({ theme }) => theme.lightBlueColor};
`;

export const MapContainer = styled.section`
  margin-top: 20px;

  overflow: hidden;

  .map-image {
    width: 100%;
    border-radius: 10px;
  }
`;
