import alunos from "./alunos.json";
import Aluno from "./Aluno";

type AlunoType = {
  nome: string;
  idade: number;
  curso: string;
};

function App() {
  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {(alunos as AlunoType[]).map((aluno, index) => (
          <Aluno
            key={index}
            nome={aluno.nome}
            idade={aluno.idade}
            curso={aluno.curso}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
