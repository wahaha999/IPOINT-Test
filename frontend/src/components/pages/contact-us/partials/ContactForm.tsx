import React, { useState, useEffect } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { submitContactFormData } from '../../../../services/api';

import InputText from '../../../common/InputText';
import InputTextarea from '../../../common/InputTextarea';
import checkIcon from '../../../../assets/images/check.svg';
import Spinner from '../../../common/Spinner';

type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string | undefined;
}

type ErrorValues = {
    path: string;
    msg: string;
    value: any;
    type: string;
    location: string;
}

const validationSchema = yup.object().shape({
    name: yup.string().trim().required('Name is required'),
    email: yup
        .string()
        .trim()
        .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, 'Invalid email format')
        .required('Email is required'),
    phone: yup
        .string()
        .trim()
        .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format (xxx-xxx-xxxx)')
        .required('Phone Number is required'),
    message: yup.string()
});

const ContactForm: React.FC = () => {
    const [errors, setErrors] = useState<ErrorValues[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const { register, handleSubmit, reset, formState } = useForm<FormValues>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    useEffect(() => {
        if (submitSuccess) {
            reset();
        }
    }, [submitSuccess, reset]);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await submitContactFormData(data);
            if (response.success) {
                setMessage(response.message);
                setSubmitSuccess(true);
            } else {
                setErrors(response.errors);
            }
        } catch (error) {
            setMessage('Failed to send your message...');
            setSubmitSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contact-form'>
            {!submitSuccess ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText
                        id='name'
                        isRequired={true}
                        register={register}
                        placeholder='John Doe'
                        helperText={formState.errors?.name?.message || 
                                    errors.find((error: ErrorValues) => error.path === 'name')?.msg}>
                        Name
                    </InputText>
                    <InputText
                        id='email'
                        isRequired={true}
                        register={register}
                        placeholder='johndoe@gmail.com'
                        helperText={formState.errors?.email?.message || 
                                    errors.find((error: ErrorValues) => error.path === 'email')?.msg}>
                        Email
                    </InputText>
                    <InputText
                        id='phone'
                        isRequired={true}
                        register={register}
                        placeholder='+1 456 4567843'
                        helperText={formState.errors?.phone?.message || 
                                    errors.find((error: ErrorValues) => error.path === 'phone')?.msg}>
                        Phone Number
                    </InputText>
                    <InputTextarea
                        id='message'
                        isRequired={false}
                        register={register}
                        placeholder='How we can help you?'>
                        Message
                    </InputTextarea>

                    <button className='button' type='submit'>
                        <span>Send Message</span>
                        { isSubmitting && <Spinner /> }
                    </button>
                </form>
            ): (
                <div className='contact-form__success'>
                    <img src={checkIcon} alt='check-icon' />
                        <h6>{ message }</h6>
                </div>
            )}
        </div>
    );
};

export default ContactForm;