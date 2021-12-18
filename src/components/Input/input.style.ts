import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  

  .mb-auth {
    margin-bottom: 30px;
  }

  .mb-search {
    margin-bottom: 10px;
  }

  label {
    text-align: start;
    color: #7c7c7c;
    font-size: 14px;
    font-weight: 600;
    width: 100%;

    input {
      border-radius: 3px;
      margin-top: 6px;
      padding: 10px 15px;
      background: #f9f9f9;
      border: 1px solid #e6e6e6;
      width: 100%;

      .search {
        background: #ffffff;
        border: 1px solid #e6e6e6;
      }
    }
  }
`;
