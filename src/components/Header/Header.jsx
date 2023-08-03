import Links from './Links.jsx';

const Navbar = ({logo, button}) => {
  button = [
    {title: 'Home', to: '/home'},
    {title: 'Events', to: '/events'},
    {title: 'Contact us', to: '/contactus'},
    {title: 'About', to: '/aboutus'}
  ]
  logo = '/suitcase.png'
  return (
    <nav id='navbar-header' className='bg-gray-700 p-4 flex flex-row'>
      <img className='w-[5%]' src={logo} alt="MyTinerary" />
      {
        button.map((e) => (<Links key={e.title} title={e.title} to={e.to} />))
      }
    </nav>
  )
}

export default Navbar