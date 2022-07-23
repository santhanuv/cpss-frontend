import styled from "@emotion/styled";

const TableWrapper = styled.div`
  overflow: auto;
  width: 90%;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    ${({ theme: { colors } }) =>
      `color: ${colors.background}; background: ${colors.primary}`};
  }

  thead {
    text-transform: capitalize;
  }

  thead,
  tbody {
    text-align: left;
    padding: 15px;
  }

  tr:last-child {
    border-bottom: 3px solid
      ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
  }

  tr:nth-of-type(even) {
    background-color: ${({
      theme: {
        colors: { tableRowGrey },
      },
    }) => tableRowGrey};
  }

  th {
    padding: 15px 50px;
  }

  td {
    padding: 15px 50px;
  }
`;

export { StyledTable, TableWrapper };
