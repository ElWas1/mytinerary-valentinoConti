import { Link as Anchor } from 'react-router-dom';

const Links = ({ title, to }) => {
  return (
    <li>
      <Anchor className="transition text-white hover:text-white/75" to={to}>
        {title}
      </Anchor>
    </li>
  )
}

export default Links