class Funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }

  exibirDetalhes() {
    console.log(
      `O funcionário ${this.nome} foi admitido em ${
        this.dataAdmissao
      } seu salário é de R$${
        this.salario
      } e seu bônus é de: R$${this.calcularBonus()}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
  }

  calcularBonus() {
    return this.salario * 0.2;
  }

  exibirDetalhesGerente() {
    console.log(
      `A gerente ${this.nome} foi admitida em ${
        this.dataAdmissao
      } seu salário é de R$${
        this.salario
      } e seu bônus é de: R$${this.calcularBonus()}`
    );
  }
}

const gerente = new Gerente(
  "Vitória Tedeia",
  "15000",
  "15/10/2021",
  "Contabilidade"
);
const funcionario = new Funcionario("Kauê Weber", "10000", "15/04/2024");
funcionario.exibirDetalhes();
gerente.exibirDetalhesGerente();
