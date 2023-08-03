const Links = ({title, to}) => {
  return (
    <button className="navbar-links" href={to}>{title}</button>
  )
}

export default Links