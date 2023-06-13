import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import {faAddressBook, faHouse, faBarsProgress} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import Router from 'next/router';


export const NavBar = () =>{
  const router = useRouter();

  function evalActive(text){
    return router.pathname.includes(text) ? "active" : ""
  }

    return(
      <>
        <nav className='nav nav-bar'>
          <Link className={`button-link extended minimal ${evalActive("home")}`} href='/'>
            <FontAwesomeIcon icon={faHouse} className='fa-ssm color-blue'  />
              <p>Home</p>
            </Link>
            <Link className={`button-link extended minimal ${evalActive("projects")}`} href='/projects'>
            <FontAwesomeIcon icon={faBarsProgress} className='fa-ssm color-blue'  />
              <p>Projects</p>
            </Link>
            <Link className={`button-link extended minimal ${evalActive("contact")}`} href='/contact'>
              <FontAwesomeIcon icon={faAddressBook} className='fa-ssm color-blue'  />
              <p>Contact</p>
            </Link>
        </nav>
      </>
    )  
  }
  