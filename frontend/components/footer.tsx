import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn }  from '@fortawesome/free-brands-svg-icons';
export const Footer = ()=>{
    return (
        <footer className="footer flex justify-center items-center py-4 text-white">
          <div className="container mx-auto flex flex-wrap justify-between">
        
            <p className="text-xs">© 2024 Copyright: <a href="https://tw-elements.com/" className="text-white hover:underline underline-offset-2">CREVO</a></p>
    
          
            <ul className="flex space-x-4 text-sm">

              <li><a href="https://www.twitter.com/" className="text-white hover:text-gray-300"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.instagram.com/" className="text-white hover:text-gray-300"><FontAwesomeIcon icon={faInstagram} /></a></li>


              <li><a href="https://www.linkedin.com/" className="text-white hover:text-gray-300"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>

            </ul>
          </div>
        </footer>
      );
}
