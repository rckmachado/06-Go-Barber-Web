/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Toast from './toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './style';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    return (
        <Container>
            {messages.map(message => (
                <Toast key={message.id} message={message} />
            ))}
        </Container>
    );
};

export default ToastContainer;
