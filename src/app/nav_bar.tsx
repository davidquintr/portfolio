import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faHouse, faBarsProgress} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

export const NavBar = () =>{
    return(
      <>
        <nav className='nav nav-bar'>
            <Link className='button-link extended minimal' href='/'>
            <FontAwesomeIcon icon={faHouse} className='fa-ssm color-blue'  />
              <p>Home</p>
            </Link>
            <Link className='button-link extended minimal'  href='/'>
            <FontAwesomeIcon icon={faBarsProgress} className='fa-ssm color-blue'  />
              <p>Projects</p>
            </Link>
            <Link className='button-link extended minimal' href='/contact'>
              <FontAwesomeIcon icon={faAddressBook} className='fa-ssm color-blue'  />
              <p>Contact</p>
            </Link>
        </nav>
      </>
    )  
  }
  