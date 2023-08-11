import { Contact, ContactData } from '../models/contact.model';
import { Request, Response } from 'express';
import nodemailer from "nodemailer";
import { sendMail } from '../services/mail.service';

export const createContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, email, phone, message}: ContactData = req.body;
        const newContact = new Contact({name, email, phone, message});
        await newContact.save();

        const emailSent = await sendMail(email, name, message);

        res.status(200).json({
            success: true,
            message: "Thank you! Please Check Your Inbox"
        });
    } catch ( error: any ) {
        res.status(500).json({
            success: false,
            message: "Failed to send your message"
        })
    }
}