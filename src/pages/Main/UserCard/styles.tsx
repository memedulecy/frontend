import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 71px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 999px 0 0 999px;
  background-color: #d9d9d980;
  font-size: 15px;
  font-weight: bold;
  color: white;

  & p {
    margin-right: 5px;
  }

  & svg {
    font-size: 24px;
  }

  & p,
  svg {
    cursor: pointer;
  }
`;

export const NicknameGenerator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 6px;
  border: 1px solid #cccccc;
  border-radius: 999px;

  & > svg {
    font-size: 24px;
  }
`;

export const UserNickName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > p {
    font-weight: bold;
    font-size: 16px;
  }
`;
