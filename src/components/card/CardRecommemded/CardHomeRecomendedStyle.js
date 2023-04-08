import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ContainerCard = styled.div`
  width: 97%;  
  height: 150px;
  margin-left: 20px;
  margin-right: 30px;
  height: 130px;
`;
export const LinkRoute = styled(Link)`
  color: #000;
  height: 100%;
  display: flex;
  align-items: left;
  text-decoration: none;
  font-weight: bold;
  curson: pointer;
  &.hover {
    color: #15cdfc;
  }
`;
export const ImageComicRecommended = styled.img`
  width:  90px;  
  height: 120px;
  object-fit: fill;
  
`;
export const ContainerCardType= styled.div`
  text-align: right;
  margin-right: 4px;
  max-height: 2vh;
`;
export const ContainerCardStar = styled.div`
  margin-left: 10px;
  text-align: right;
  margin-right: 4px;
`;
export const ContainerRowContent = styled.div`
  height: 10vh;
  overflow: hidden;

`;
export const ContainerRowInfo = styled.div`
  margin-left: -17px;
`;