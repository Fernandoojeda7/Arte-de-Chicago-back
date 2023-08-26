import MessageService from "../services/message.service";

class MessageHandler {
  service = new MessageService();

  async create({
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
    if (!email) {
      throw new Error("Email es requerido");
    }
    if (!fullName) {
      throw new Error("El Nombre y Apellido es requerido");
    }

    if (!phone) {
      throw new Error("El telefono es requerido");
    }

    if (!message) {
      throw new Error("El mensaje es requerido");
    }

    const mensaje = await this.service.create({
      email,
      fullName,
      phone,
      message,
    });
    return mensaje;
  }
}
export default MessageHandler;
