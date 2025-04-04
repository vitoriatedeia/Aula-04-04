class Usuario {
  constructor(senha) {
    // this.senha = "123456789";
    this.senha = senha;
  }

  // MÉTODO verificarForcaSenha ENCAPSULADO - TRADUZINDO ELE ESTÁ PRIVADO,
  // APENAS OS ATRIBUTOS DENTRO DESTA CLASSE TEM ACESSO A ELE!
  #verificarForcaSenha(senha) {
    return senha.length > 6 ? true : false;
  }

  criarConta() {
    if (this.#verificarForcaSenha(this.senha)) {
      return console.log("Conta criada!");
    }

    return console.log("Senha inválida!");
  }
}

const user = new Usuario(123456789);
user.criarConta();

/* ------------------------------------------------------------------------ */
//EXTENDS - PALAVRA-CHAVE UTILIZADA EM JAVASCRIPT PARA CRIAR UMA CLASSE FILHA
// QUE HERDA UMA CLASSE PAI, NESTE CASO CARRO (FILHA) HERDA VEICULO (PAI)
class Carro extends Veiculo {
  // SUPER - UTILIZADO PARA CHAMAR O CONSTRUCTOR DA CLASSE PAI
  // E REUTILIZAR SEUS ATRIBUTOS
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }

  info() {
    console.log(
      `A marca do carro é: ${this.marca}, seu modelo é: ${this.modelo} e ele possui ${this.portas} portas`
    );
  }
}
const meuCarro = new Carro("Honda", "Civic", 4);
meuCarro.info();

/* ------------------------------------------------------------------------ */

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  mostrarDados() {
    console.log(
      `Funcionário: ${this.nome}, salário: R$${this.salario.toFixed(2)}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, tipo) {
    super(nome, salario);
    this.tipo = tipo;
  }

  mostrarSetor() {
    console.log(`${this.nome} é gerente do setor  ${this.tipo}`);
  }
}

const gerente = new Gerente("Kauê", 10000, "TI");
gerente.mostrarDados();
gerente.mostrarSetor();
