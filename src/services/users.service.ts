import { User } from "@prisma/client";
import prisma from "../config/db";
import Exception from "../utils/Exception";

const regex = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  onlyLetters: /^[a-zA-Z]+$/,
  onlyNumbers: /^[0-9]+$/,
};

class UsersService {
  findById(id: number) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  create({
    name,
    lastName,
    email,
    dni,
    password,
    phone,
  }: {
    name: string;
    lastName: string;
    email: string;
    dni: string;
    password: string;
    phone: string;
  }) {
    if (!regex.email.test(email)) throw new Exception("El email no es valido");
    if (!regex.onlyNumbers.test(dni) && dni.length !== 8)
      throw new Exception("DNI no es valido");

    return prisma.user.create({
      data: {
        name,
        lastName,
        email,
        dni,
        password,
        phone,
      },
    });
  }

  update(id: number, data: Partial<User>) {
    return prisma.user.update({
      where: {
        id,
      },
      data: data as any,
    });
  }

  delete(id: number) {
    return prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async emailOrDniAlreadyExists({
    email,
    dni,
  }: {
    email: string;
    dni: string;
  }) {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email,
          },
          {
            dni,
          },
        ],
      },
    });
    return user ? true : false;
  }
}

export default UsersService;
