import styled from 'styled-components';

export default function Message({ text }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const Text = styled.div`
  width: 465px;
  height: 200px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 20px;
  color: #8e8e8e;
  line-height: 26px;
  b {
    font-weight: 700;
  }
`;
