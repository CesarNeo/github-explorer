import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: '#'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}