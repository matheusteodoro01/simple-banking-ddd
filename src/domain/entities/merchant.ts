import {
  Name,
  Email,
  Cnpj,
  Balance,
  Password,
  PBKDF2Password,
  PasswordFactory,
} from "@/domain/value-objects";

export class MerchantAccount {
  private constructor(
    readonly accountId: string,
    readonly name: Name,
    readonly email: Email,
    readonly cnpj: Cnpj,
    readonly balance: Balance,
    readonly password: Password
  ) {}

  static create(
    name: string,
    email: string,
    cnpj: string,
    balance: number = 0,
    password: string = ""
  ) {
    const accountId = crypto.randomUUID();
    return new MerchantAccount(
      accountId,
      new Name(name),
      new Email(email),
      new Cnpj(cnpj),
      new Balance(balance),
      PBKDF2Password.create(password)
    );
  }

  static restore(
    accountId: string,
    name: string,
    email: string,
    cnpj: string,
    balance: number = 0,
    password: string,
    passwordAlgorithm: string,
    salt: string
  ) {
    return new MerchantAccount(
      accountId,
      new Name(name),
      new Email(email),
      new Cnpj(cnpj),
      new Balance(balance),
      PasswordFactory.create(passwordAlgorithm).restore(password, salt)
    );
  }
}
