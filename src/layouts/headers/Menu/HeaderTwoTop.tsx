import Link from "next/link"

const HeaderTwoTop = () => {
   return (
      <div className="container-fluid bg-color-1">
         <div className="header-top">
            <div className="header-top-contact-info">
               <span className="email p-relative"><Link href="mailto:info@tothshield.com">info@tothshield.com</Link></span>
               <span className="time p-relative">Hours: Mon - Fri: 9.00 AM - 6.00 PM ET</span>
            </div>
            <div className="header-top-socials">
               <span><Link href="https://www.facebook.com/profile.php?id=100088916094011" target="_blank"><i className="fab fa-facebook-f"></i></Link></span>
               <span><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></span>
               <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
               <span><Link href="https://www.youtube.com/@Bimini-Boating" target="_blank"><i className="fab fa-youtube"></i></Link></span>
            </div>
         </div>
      </div>
   )
}

export default HeaderTwoTop
