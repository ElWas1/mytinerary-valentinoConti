import { Link as Anchor } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const user = useSelector(store => store.user.user)

  return (
    <header className="z-20 relative backdrop-blur-xl bg-gray-900/20">
      <div className="max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Anchor title='Home' className="text-white" to="/">
              <h1 className='max-[600px]:text-xl text-3xl font-bold'>MyTinerary</h1>
            </Anchor>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Anchor title={user ? `${user.username}'s Profile` : `Sign In`} to={user ? `/user/${user.username}` : `/sign`}>
                {user ? <img className='w-12 h-12 rounded-3xl' src={user.image} alt="User Photo" /> : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>)}
              </Anchor>
            </div>
            <label htmlFor="my-drawer-4" className="drawer-button btn text-black hover:text-white hover:bg-indigo-600 duration-300 bg-white max-md:max-w-16 max-md:text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar