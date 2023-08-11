import React from 'react';
import { renderAsterisk } from '../../utils/helpers';

type InputTextareaProps = {
    id: string;
    isRequired: boolean;
    register: Function;
    children: React.ReactNode;
    placeholder: string;
}

const InputTextarea: React.FC<InputTextareaProps> = ({ id, isRequired, register, children, placeholder }) => {
    return (
        <div className='contact-form__item'>
            <label htmlFor='id'>
                {children}
                {renderAsterisk(isRequired)}
            </label>
            <textarea
                id={id}
                className='contact-form__textarea'
                placeholder={placeholder}
                required={isRequired}
                {...register(id)} />
        </div>
    );
};

export default InputTextarea;