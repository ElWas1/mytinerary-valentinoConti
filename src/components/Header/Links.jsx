import { Link as Anchor } from 'react-router-dom';

const Links = ({ title, to }) => {
  return (
    <li>
      <Anchor className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" to={to}>
        {title}
      </Anchor>
    </li>
  )
}

export default Links