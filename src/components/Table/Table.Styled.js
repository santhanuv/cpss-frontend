import styled from "@emotion/styled";

const StyledTable = styled.div`
  width: 95%;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    ${({ theme: { colors } }) =>
      `background-color: ${colors.primary}; color: ${colors.background}`};
  }

  tr:nth-of-type(even) {
    background-color: ${({
      theme: {
        colors: { tableRowGrey },
      },
    }) => tableRowGrey};
  }

  tbody tr:last-child {
    border-bottom: 3px solid
      ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
  }

  th,
  td {
    padding: 12px 16px;
  }

  td,
  thead tr {
    border: 1px solid lightgrey;
  }
`;

export default StyledTable;
