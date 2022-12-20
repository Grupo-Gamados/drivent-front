import styled from 'styled-components';
import { useState } from 'react';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';

export default function OptionBox({ description, price }) {
  const [selected, setSelected] = useState(false);
  const { ticketTypeSelected, setTicketTypeSelected, includesHotel, setIncludesHotel } = useContext(TicketContext);

  function selectTicketTypeOption() {
    setIncludesHotel('');
    if (ticketTypeSelected !== description) {
      setSelected(true);
      setTicketTypeSelected(description);
    } else {
      setSelected(!selected);
      setTicketTypeSelected('');
    }
  }
  function selectHotelOption() {
    if (includesHotel !== description) {
      setSelected(true);
      setIncludesHotel(description);
    } else {
      setSelected(!selected);
      setIncludesHotel('');
    }
  }

  function toTitleCase(str) {
    return str
      .split(' ')
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(' ');
  }

  return description.toLowerCase() === 'presencial' || description.toLowerCase() === 'online' ? (
    <BoxWrapper
      onClick={selectTicketTypeOption}
      isClicked={selected}
      ticketTypeSelected={ticketTypeSelected}
      description={description}
    >
      <h1>{toTitleCase(description)}</h1>
      <h2>R$ {price}</h2>
    </BoxWrapper>
  ) : (
    <BoxWrapper
      onClick={selectHotelOption}
      isClicked={selected}
      includesHotel={includesHotel}
      description={description}
    >
      <h1>{description}</h1>
      <h2>+ R$ {price}</h2>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  width: 145px;
  height: 145px;
  margin: 12px 0;
  border: ${(props) =>
    (props.isClicked && props.ticketTypeSelected === props.description) ||
    (props.isClicked && props.includesHotel === props.description)
      ? 'none'
      : '1px solid #cecece'};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  background-color: ${(props) =>
    (props.isClicked && props.ticketTypeSelected === props.description) ||
    (props.isClicked && props.includesHotel === props.description)
      ? '#FFEED2'
      : '#ffffff'};

  h1 {
    font-size: 16px;
    color: #454545;
    padding-bottom: 10px;
  }
  h2 {
    font-size: 14px;
    color: #898989;
  }
`;
