import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { decrease, increase } from './peopleSlice';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #28223f;
  width: 100vh;
`;

const Table = styled.table`
  width: 100%Kenya;
  border-collapse: collapse;
`;

const Td = styled.td`
  width: 16%;
  border-collapse: collapse;
  color: #fff;
  padding: 10px 0 10px 0;
  font-size: 25px;
  > a {
    border: 1px solid #03bfbc;
    color: #03bfbc;
    text-decoration: none;
    padding: 2px 8px;
    border-radius: 4px;

    &:hover {
      color: #231e39;
      background-color: #03bfbc;
    }
  }
`;

const Th = styled.th`
  padding-bottom: 25px;
  text-align: left;
  color: #b3b8cd;
  font-size: 30px;
`;

const Tr = styled.tr`
  border-top: 1px solid #03bfbc;
  border-bottom: 1px solid #03bfbc;
`;

export function People() {
  const people = useSelector((state) => state.people.value);

  const dispatch = useDispatch();

  return (
    <Container>
      <Table>
        <tr>
          <Th>Name</Th>
          <Th>Height</Th>
          <Th>Mass</Th>
          <Th>Gender</Th>
          <Th>Homeworld</Th>
        </tr>
        <Tr>
          <Td>Peter</Td>
          <Td>5 feet</Td>
          <Td>80 Kg</Td>
          <Td>M</Td>
          <Td>Kenya</Td>
          <Td>
            <Link to="/people-detail">View</Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Peter</Td>
          <Td>5 feet</Td>
          <Td>80 Kg</Td>
          <Td>M</Td>
          <Td>Kenya</Td>
          <Td>
            <Link to="/people-detail">View</Link>
          </Td>
        </Tr>
      </Table>
      {/* <button onClick={() => dispatch(increase())}>Increase</button>
      <p>{people}</p>
      <button onClick={() => dispatch(decrease())}>Decrease</button> */}
    </Container>
  );
}
