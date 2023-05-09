import Link from "next/link";
export default function Postgresql() {
  const anotação = `
  postgresql

  -detalhe importante, se o nome de usuario for igual ao nome de algum database então 
  ao fazer o login, usar apenas o parametro do nome do usuario vai tentar conectar 
  diretamente com o database de mesmo nome, pode ser usado para facilitar o uso.

    >crie um user com nome fuinha
    >crie um db com nome fuinha
    login> psql -U fuinha
      -coloque o password
  
  -Conectar ao db, inserir o nome do usuario e depois a base de dados
  
  > psql -U fuinhaf fuinha_db
  
    mostrar conexã
    > \conninfo
  
    listar os usuarios 
    > \du
  
    listar as bases de dados
    > \l
  
    conectar as bases de dados
    > \c
  
    mudar a conexão com as bases de dados existentes
    > \c nome_do_banco
  
    listar bancos
    > \d
  
    listar tabelas
    > \dt
  
  
    -Sair do psql
    > \q 
  
    
  
  Comandos de SQL: (é importante terminar com o ";")s
  
    criar database
    > CREATE DATABASE nome_do_banco;
  
    excluir database
    > DROP DATABASE nome_do_banco;
  
    criar tabela
    > CREATE TABLE IF NOT EXIST nome_da_tabela (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(180) NOT NULL,
      password VARCHAR(256) NOT NULL,
      email VARCHAR(256) UNIQUE NOT NULL
    );
    excluir tabela
    > DROP TABLE nome_da_tabela;
  
      buscar dados:
      > 	SELECT * FROM nome_da_tabela
        WHERE X=Y;
  
      inserir dados:
      > 	INSERT INTO nome_da_tabela (coluna1, coluna2, coluna3)
        VALUES (valor1, valor2, valor3);
  
      atualizar dados:
      > 	UPDATE nome_da_tabela
        SET coluna1 = novoValor , coluna2 = novoValor2
        WHERE id = x;
      remover dados: 
      >	DELETE FROM nome_da_tabela
        WHERE id = x;
  `;
  return (
    <pre className=" leading-5">
      <div className="flex justify-end ">
        <Link className="p-2 bg-zinc-600" href="/notes">
          Voltar
        </Link>
      </div>

      {anotação}
    </pre>
  );
}
