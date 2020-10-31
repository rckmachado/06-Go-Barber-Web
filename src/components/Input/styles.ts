/* eslint-disable import/extensions */
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isField: boolean;
    isErrored: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #666360;

    & + div {
        margin-top: 8px;
    }

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    ${props =>
        props.isField &&
        css`
            color: #ff9000;
        `}

    input {
        flex: 1;
        background: transparent;
        color: #f4e0e8;
        border: 0;
        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
