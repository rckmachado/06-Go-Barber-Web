/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/toasts';

export interface ToastMessage {
    id: string;
    type?: 'sucess' | 'error' | 'info';
    title: string;
    description?: string;
}

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    const addToast = useCallback(
        ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
            const id = uuid();

            const toast = {
                id,
                type,
                title,
                description,
            };

            setMessages(state => [...messages, toast]);
        },
        [],
    );

    const removeToast = useCallback(() => {
        console.log('removeToast');
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
};

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be use within a ToastProvider');
    }

    return context;
}

export { ToastProvider, useToast };
