import mongoose, { Schema } from 'mongoose';

export interface ContactData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const contactSchema: Schema = new mongoose.Schema<ContactData>({
    name: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true, 
    },
    phone: { 
        type: String, 
        required: true, 
    },
    message: { 
        type: String, 
    }
});

export const Contact = mongoose.model('Contact', contactSchema);