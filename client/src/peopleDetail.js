import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsAltV,
  faHome,
  faLongArrowAltLeft,
  faUserFriends,
  faWeight
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background-color: #28223f;
  color: #b3b8cd;
  > button {
    margin: 50px 0 0 100px;
    border: 1px solid #03bfbc;
    color: #03bfbc;
    text-decoration: none;
    padding: 2px 8px;
    border-radius: 4px;
    background-color: transparent;
    height: 50px;
    padding: 0 10px;
    font-size: 20px;

    > a {
      color: #03bfbc;
      text-decoration: none;
      padding-left: 10px;
    }

    &:hover {
      color: #231e39;
      background-color: #03bfbc;

      > a {
        color: #231e39;
      }
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
  }
`;

const Card = styled.div`
  background-color: #231e39;
  color: #b3b8cd;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.75);
`;

const CardHeader = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
  border-radius: 5px 5px 0 0;
  padding: 0 15px;
  background-image: url(https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80);
`;

const CardPhoto = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 1px solid #1f1a32;
  padding: 7px;
  background-color: #292343;
  overflow: hidden;
  transform: translateY(calc(50% + 40px));

  > img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

const CardBody = styled.div`
  padding: 0 15px 15px;
  text-align: center;

  h3 {
    font-size: 35px;
    font-weight: 700;
    margin: 30px 0 0 135px;
  }

  p {
    font-size: 18px;
    line-height: 21px;
    margin-top: 35px;
  }
`;

export function PeopleDetail() {
  return (
    <Container>
      <button>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
        <Link to="/">Go Back</Link>
      </button>
      <div>
        <Card>
          <CardHeader>
            <CardPhoto>
              <img
                src="https://www.maxpixel.net/static/photo/640/Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.png"
                alt="person picture"
              />
            </CardPhoto>
          </CardHeader>
          <CardBody>
            <h3>Beni Smith</h3>
            <p>
              <FontAwesomeIcon icon={faArrowsAltV} /> Height | <FontAwesomeIcon icon={faWeight} />{' '}
              Mass | <FontAwesomeIcon icon={faUserFriends} /> Gender |{' '}
              <FontAwesomeIcon icon={faHome} /> Homeland
            </p>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
