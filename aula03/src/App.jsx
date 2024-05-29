import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>{
        [
        {nome: "Jeimison", email: "jeimison@gmail.com", curso: "Sistemas", media: 7},
        {nome: "Pedro", email: "pedro@gmail.com", curso: "Sistemas", media: 8},
        {nome: "Brian", email: "Brian@gmail.com", curso: "Sistemas", media: 9}
        ].map((aluno) =>
            <Aluno nome={aluno.nome} curso={aluno.curso} email={aluno.email} media={aluno.media} />
        )
        }</div>
  )
}

export default App