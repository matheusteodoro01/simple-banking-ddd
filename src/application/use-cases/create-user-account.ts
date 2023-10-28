import { UserAccount } from "@/domain/entities";
import { UserRepository } from "@/domain/repositories";

type Input = {
  name: string;
  email: string;
  cpf: string;
  balance: number;
  password: string;
};

export class CreateUserAccount {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: Input) {
    const existentAccount = await this.userRepository.getByEmail(input.email);
    if (existentAccount) {
      throw new Error(`Account ${existentAccount.accountId} already  exists`);
    }
    const account = UserAccount.create(
      input.name,
      input.email,
      input.cpf,
      input.password,
      input.balance
    );
    await this.userRepository.save(account);
  }
}
