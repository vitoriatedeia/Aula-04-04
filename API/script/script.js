// const minhaPromise = new Promise((resolve, reject) => {
//   let sucesso = false;

//   setTimeout(() => {
//     if (sucesso) {
//        resolve("A promise foi um sucesso!");
//     } else {
//       reject("A promise não foi um sucesso!");
//     }
//   }, 2000);
// });

// minhaPromise
//   .then((resultado) => console.log(resultado))
//   .catch((erro) => console.log(erro));

// function buscar(cep) {
//   return new Promise((resolve, reject) => {
//     console.log("Buscando endereço...");

//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Erro na resposta da API");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         if (data.erro) {
//           reject("O CEP não foi encontrado!");
//         } else {
//           resolve(data);
//         }
//       })
//       .catch((error) => {
//         reject("Erro na requisição: " + error);
//       });
//   });
// }

// buscar("13173522")
//   .then((endereco) => {
//     console.log("Eendereço encontrado: ", endereco);
//   })
//   .catch((error) => console.log(error));

//   async/await

async function buscarEndereco(cep) {
  try {
    console.log("Buscando endereço...");
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    console.log("Endereço encontrado: ", dados);
  } catch (error) {
    console.log(error);
  }
}

buscarEndereco("01001000");
console.log("Requisição enviada!");
