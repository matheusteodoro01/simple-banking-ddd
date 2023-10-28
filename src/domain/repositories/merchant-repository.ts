import { MerchantAccount } from "@/domain/entities";

export interface MerchantRepository {
  save(MerchantAccount: MerchantAccount): Promise<void>;
  getById(id: string): Promise<MerchantAccount | null>;
  getByEmail(email: string): Promise<MerchantAccount | null>;
}
