import styled from 'styled-components';
import { error } from '../../../styles/color';

export default Component => styled(Component)`
  max-width: 480px;
  margin: 0 auto;
  align-self: center;
  padding: 40px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  h1 {
    font-size: 24px;
    margin: 0 0 20px 0;
    text-align: center;
  }

  p {
    margin-bottom: 20px;
    text-align: center;
    color: ${error};
  }

  footer {
    text-align: center;
  }
`;
