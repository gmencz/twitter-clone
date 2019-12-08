import styled from 'styled-components'
import { ILoaderProps } from '.'

export const SpinnerWrapper = styled.div<ILoaderProps>`
  display: inline-block;
  position: relative;
  width: ${props => (props.width ? props.width : '30px')};
  height: ${props => (props.width ? props.width : '30px')};

  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${props => (props.width ? props.width : '30px')};
    height: ${props => (props.width ? props.width : '30px')};
    border: 3px solid var(--dominant-clr);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--dominant-clr) transparent transparent transparent;
  }

  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
