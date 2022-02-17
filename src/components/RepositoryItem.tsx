import { RepositoryProps } from '../../types/repository';

export function RepositoryItem(props: RepositoryProps) {
  return (
    <li>
      <strong>{props?.repository?.name}</strong>
      <p>{props?.repository?.description}</p>

      <a href={props?.repository?.html_url}>Acessar Repositório</a>
    </li>
  );
}
