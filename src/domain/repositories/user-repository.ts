import { UserAccount } from "@/domain/entities";

export interface UserRepository {
  save(UserAccount: UserAccount): Promise<void>;
  getById(id: string): Promise<UserAccount | null>;
  getByEmail(email: string): Promise<UserAccount | null>;
}
