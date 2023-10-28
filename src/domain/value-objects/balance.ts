export class Balance {
  private readonly value: number;

  constructor(value: number) {
    if (value < 0) {
      throw new Error("O saldo não pode ser negativo");
    }

    const roundedValue = Math.round(value * 100) / 100;

    if (roundedValue !== value) {
      throw new Error("O saldo deve ter no máximo duas casas decimais");
    }

    this.value = roundedValue;
  }

  getValue(): number {
    return this.value;
  }

  add(amount: number): Balance {
    if (amount < 0) {
      throw new Error("O valor a ser adicionado deve ser positivo");
    }
    return new Balance(this.value + amount);
  }

  subtract(amount: number): Balance {
    if (amount < 0) {
      throw new Error("O valor a ser subtraído deve ser positivo");
    }
    if (this.value < amount) {
      throw new Error("Saldo insuficiente para realizar a operação");
    }
    return new Balance(this.value - amount);
  }
}
