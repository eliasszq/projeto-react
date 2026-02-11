import alunos from "./alunos.json";
import Aluno from "./Aluno";

type AlunoType = {
  id: number;
  nome: string;
  idade: number;
  curso: string;
};

const listaAlunos = alunos as AlunoType[];

const App = () => {
  return (
    <div>
      <h1>Lista de Alunos</h1>
      <div>
        {listaAlunos.map((aluno) => (
          <Aluno
            key={aluno.id}
            nome={aluno.nome}
            idade={aluno.idade}
            curso={aluno.curso}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
