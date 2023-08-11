import React from 'react';
import { renderAsterisk } from '../../utils/helpers';

type InputTextProps = {
    id: string;
    isRequired: boolean;
    register: Function;
    children: React.ReactNode;
    placeholder: string;
    helperText?: string;
}

const InputText: React.FC<InputTextProps> = ({ id, isRequired, register, children, placeholder, helperText }) => {
    return (
        <div className='contact-form__item'>
            <label htmlFor='id'>
                {children}
                {renderAsterisk(isRequired)}
            </label>
            <input
                id={id}
                className='contact-form__input'
                type='text' placeholder={placeholder}
                required={isRequired}
                {...register(id)} />
            {helperText && <span className='contact-form__error'>{ helperText }</span>}
        </div>
    );
};

export default InputText;