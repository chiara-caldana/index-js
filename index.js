
const usuarios = [
    { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
    { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
    { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
    { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

// 1. Retorna apenas o nome e o cargo dos usuários
function listarUsuarios() {
    return usuarios.map(usuario => ({
        nome: usuario.nome,
        cargo: usuario.cargo
    }));
}

// 2. Busca um usuário pelo ID
function buscarUsuarioPorId(id) {
    return usuarios.find(usuario => usuario.id === id);
}

// 3. Retorna apenas os usuários ativos
function listarUsuariosAtivos() {
    return usuarios.filter(usuario => usuario.ativo === true);
}

// 4. Verifica se existe algum usuário inativo
function existeUsuarioInativo() {
    return usuarios.some(usuario => usuario.ativo === false);
}

// 5. Verifica se todos os usuários têm 18 anos ou mais
function todosUsuariosMaioresDeIdade() {
    return usuarios.every(usuario => usuario.idade >= 18);
}

// 6. Calcula a média de idade dos usuários
function calcularMediaIdade() {
    const somaIdades = usuarios.reduce(
        (total, usuario) => total + usuario.idade,
        0
    );

    return somaIdades / usuarios.length;
}

// Testes
console.log("Lista resumida:", listarUsuarios());
console.log("Buscar ID 2:", buscarUsuarioPorId(2));
console.log("Ativos:", listarUsuariosAtivos());
console.log("Há inativos?", existeUsuarioInativo());
console.log("Todos maiores de idade?", todosUsuariosMaioresDeIdade());
console.log("Média de idade:", calcularMediaIdade());
