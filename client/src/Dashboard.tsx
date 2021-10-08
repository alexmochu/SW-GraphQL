import React from 'react';
import { Link } from 'react-router-dom';
// import { decrease, increase } from './peopleSlice';
import styled from 'styled-components';
import { IPersonItem } from './types/people';
import { usePeopleQuery } from './utilities';
import { GET_PEOPLE } from './graphql/queries';

const AppDiv = styled.header`
  background-color: #28223f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

const Table = styled.table`
  margin: 2rem 10rem;
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
    padding: 2px 20px;
    margin-left: 6rem;
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

const Dashboard: React.FC = () => {
  const { data } = usePeopleQuery(GET_PEOPLE);
  return (
    <AppDiv>
      <h3>Star Wars API People</h3>
      <Table>
        <tr>
          <Th>Name</Th>
          <Th>Height</Th>
          <Th>Mass</Th>
          <Th>Gender</Th>
          <Th>Homeworld</Th>
        </tr>
        {data?.getPeople.map((item: IPersonItem) => {
          const { name, height, mass, gender, homeworld } = item;
          return (
            <>
              <Tr>
                <Td>{name}</Td>
                <Td>{height} `</Td>
                <Td>{mass} Kg</Td>
                <Td>{gender}</Td>
                <Td>{homeworld}</Td>
                <Td>
                  <Link to={`/people-detail/${name.split(' ')[0]}`}>View</Link>
                </Td>
              </Tr>
            </>
          );
        })}
      </Table>
      {/* <button onClick={() => dispatch(increase())}>Increase</button>
      <p>{people}</p>
      <button onClick={() => dispatch(decrease())}>Decrease</button> */}
    </AppDiv>
  );
};

export default Dashboard;
