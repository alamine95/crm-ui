import axios from "axios";

const SEND_MAIL_API_BASE_URI = "http://localhost:3001/api/v1/sendMail";

const SEND_MAIL_WITH_ATTACHEMANT_API_BASE_URI = "http://localhost:3001/api/v1/sendMail/withAttachment";

class SendEmailService{
    sendEmail(mail){
        return axios.post(SEND_MAIL_API_BASE_URI, mail);
    }

    sendEmailWithAttachment(mail){
        return axios.post(SEND_MAIL_WITH_ATTACHEMANT_API_BASE_URI, mail);
    }
}

export default new SendEmailService();