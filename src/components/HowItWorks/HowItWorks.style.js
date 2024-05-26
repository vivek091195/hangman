import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../styles';

export const Wrapper = styled.div`
  padding: 80px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 384px;
  height: 550px;
  background: ${COLORS.WHITE.shade1};
  border-radius: 40px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardId = styled.div`
  font-size: ${TYPOGRAPHY.l};
  color: ${COLORS.BLUE.shade2};
`;

export const CardTitle = styled.div`
  font-size: ${TYPOGRAPHY.m};
  color: ${COLORS.BLUE.shade1};
  text-transform: uppercase;
`;

export const CardBody = styled.div`
  font-size: ${TYPOGRAPHY.body};
  color: ${COLORS.BLUE.shade10};
`;
