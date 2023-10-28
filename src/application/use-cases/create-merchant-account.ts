import { MerchantAccount } from "@/domain/entities";
import { MerchantRepository } from "@/domain/repositories/merchant-repository";

type Input = {
  name: string;
  email: string;
  cnpj: string;
  balance: number;
  password: string;
};

export class CreateMerchantAccount {
  constructor(private readonly merchantRepository: MerchantRepository) {}

  async execute(input: Input) {
    const existentAccount = await this.merchantRepository.getByEmail(
      input.email
    );
    if (existentAccount) {
      throw new Error(`Account ${existentAccount.accountId} already  exists`);
    }
    const account = MerchantAccount.create(
      input.name,
      input.email,
      input.cnpj,
      input.balance,
      input.password
    );
    await this.merchantRepository.save(account);
  }
}
