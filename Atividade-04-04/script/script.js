// Classe Funcionario, que representa um funcionário
class Funcionario {
  // Construtor da classe Funcionario, recebe nome, salario e data de admissão
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome; // Atribui o nome do funcionário
    this.salario = salario; // Atribui o salário do funcionário
    this.dataAdmissao = dataAdmissao; // Atribui a data de admissão
  }

  // Método que calcula o bônus do funcionário (10% do salário)
  calcularBonus() {
    return this.salario * 0.1; // Retorna 10% do salário
  }

  // Método que exibe os detalhes do funcionário
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

// Classe Gerente, que herda de Funcionario
class Gerente extends Funcionario {
  // Construtor da classe Gerente, que também recebe nome, salário, data de admissão e um novo atributo: departamento
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao); // Chama o construtor da classe pai (Funcionario)
    this.departamento = departamento; // Atribui o departamento do gerente
  }

  // Sobrescrita do método calcularBonus para a classe Gerente (bônus de 20% do salário)
  calcularBonus() {
    return this.salario * 0.2; // Retorna 20% do salário
  }

  // Método específico para exibir os detalhes do gerente
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

// Criação de uma instância da classe Gerente
const gerente = new Gerente(
  "Vitória Tedeia", // Nome do gerente
  "15000", // Salário do gerente
  "15/10/2021", // Data de admissão
  "Contabilidade" // Departamento do gerente
);

// Criação de uma instância da classe Funcionario
const funcionario = new Funcionario("Kauê Weber", "10000", "15/04/2024"); // Nome, salário e data de admissão do funcionário

// Exibe os detalhes do funcionário
funcionario.exibirDetalhes();

// Exibe os detalhes do gerente
gerente.exibirDetalhesGerente();
