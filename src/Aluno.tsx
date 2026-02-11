type AlunoProps = {
  nome: string;
  idade: number;
  curso: string;
};

const Aluno = ({ nome, idade, curso }: AlunoProps) => {
  return (
    <div>
      {nome} - {idade} anos - {curso}
    </div>
  );
};

export default Aluno;
