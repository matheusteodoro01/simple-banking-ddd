import {
  Name,
  Email,
  Cpf,
  Balance,
  Password,
  PBKDF2Password,
  PasswordFactory,
} from "@/domain/value-objects";

export class UserAccount {
  private constructor(
    readonly accountId: string,
    readonly name: Name,
    readonly email: Email,
    readonly cpf: Cpf,
    readonly balance: Balance,
    readonly password: Password
  ) {}

  static create(
    name: string,
    email: string,
    cpf: string,
    password: string = "",
    balance: number = 0
  ) {
    const accountId = crypto.randomUUID();

    return new UserAccount(
      accountId,
      new Name(name),
      new Email(email),
      new Cpf(cpf),
      new Balance(balance),
      PBKDF2Password.create(password)
    );
  }

  static restore(
    accountId: string,
    name: string,
    email: string,
    cpf: string,
    balance: number,
    password: string,
    passwordAlgorithm: string,
    salt: string
  ) {
    return new UserAccount(
      accountId,
      new Name(name),
      new Email(email),
      new Cpf(cpf),
      new Balance(balance),
      PasswordFactory.create(passwordAlgorithm).restore(password, salt)
    );
  }
}
