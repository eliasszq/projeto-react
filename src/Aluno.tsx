type Props = {
  nome: string;
  idade: number;
  curso: string;
};

function Aluno({ nome, idade, curso }: Props) {
  return (
    <li>
      {nome} - {idade} anos - {curso}
    </li>
  );
}

export default Aluno;
