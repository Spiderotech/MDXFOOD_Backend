import nodemailer from 'nodemailer';
import config from '../../../config/config.js';
import randomstring from 'randomstring';

const otpServiceImp = () => {

    const createotp = async () => {
        const otpValue = randomstring.generate({
          length: 6,
          charset: "numeric",
        });
    
      
        return otpValue;
      };
    
      const sendOtpByEmail = async (email, otpValue) => {
          const transporter = nodemailer.createTransport({
              service: 'gmail',
              host: 'smtp.gmail.com',
              port: 465,
              auth: {
                  user: config.EMAIL,
                  pass: config.PASSWORD,
              },
          });
    
        const mailOptions = {
          from:config.EMAIL,
          to: email,
          subject: "OTP Verification for Mdx restaurant  ",
          text: `Your OTP is: ${otpValue}`,
        };
    
        try {
          await transporter.sendMail(mailOptions);
          console.log("OTP sent successfully to:", email);
          return true;
        } catch (error) {
          console.error("Error sending OTP:", error);
          return false;
        }
      };


    return{
        createotp,
      sendOtpByEmail,
        
    }
}

export default otpServiceImp