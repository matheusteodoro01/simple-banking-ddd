export class Cnpj {
  private value: string;

  constructor(cnpj: string) {
    const cleanedCNPJ = cnpj.replace(/\D/g, "");

    if (!this.isValid(cleanedCNPJ)) {
      throw new Error("CNPJ inválido");
    }

    this.value = cleanedCNPJ;
  }

  getValue(): string {
    return this.value;
  }

  private isValid(cnpj: string): boolean {
    if (cnpj.length !== 14) {
      return false;
    }

    if (
      cnpj === "00000000000000" ||
      cnpj === "11111111111111" ||
      cnpj === "22222222222222"
    ) {
      return false;
    }

    return true;
  }
}
