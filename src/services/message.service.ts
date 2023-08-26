import prisma from "../config/db";

class MessageService {
  create({
    email,
    fullName,
    phone,
    message,
  }: {
    email: string;
    fullName: string;
    phone: string;
    message: string;
  }) {
    return prisma.message.create({
      data: {
        email,
        fullName,
        phone,
        message,
      },
    });
  }
}

export default MessageService;
