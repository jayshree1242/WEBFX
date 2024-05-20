// // Filename - components/Footer.js

// import React from "react";
// import {
//   Box,
//   FooterContainer,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./FooterStyles";

// const Footer = () => {
//   return (
//     <Box>
//       <h1
//         style={{
//           color: "green",
//           textAlign: "center",
//           marginTop: "10px",
//         }}
//       ></h1>
//       <FooterContainer>
//         <Row>
//           <Column>
//             <Heading>
//               <h6>Celebrating 25+ Years of Digital Marketing Excellence</h6>
//               <br></br>
//               Ready to speak with a marketing expert? <br></br>Give us a ring
//             </Heading>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Digital Marketing Services</FooterLink>
//             <FooterLink href="#">SEO Services</FooterLink>
//             <FooterLink href="#">PPC Services</FooterLink>
//             <FooterLink href="#">Content Marketing Services</FooterLink>
//             <FooterLink href="#">Social Media Services</FooterLink>
//             <FooterLink href="#">Web Design Services</FooterLink>
//             <FooterLink href="#">Digital Advertising Services</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span
//                   style={{
//                     marginLeft: "10px",
//                   }}
//                 >
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span
//                   style={{
//                     marginLeft: "10px",
//                   }}
//                 >
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span
//                   style={{
//                     marginLeft: "10px",
//                   }}
//                 >
//                   Twitter
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span
//                   style={{
//                     marginLeft: "10px",
//                   }}
//                 >
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//       </FooterContainer>
//     </Box>
//   );
// };
// export default Footer;

// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "10px",
        }}
      ></h1>
      <FooterContainer>
        <Row>
          <Column>
            <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/footer/webfx-logo.png"></img>
            <Heading>
              {" "}
              <h6>Celebrating 25+ Years of Digital Marketing Excellence </h6>
              {/* <br></br> */}
              <h5>
                Ready to speak with a marketing expert? <br></br>
                Give us a ring
              </h5>
              <body>
                <button>888-607-5359</button>
              </body>
      

            </Heading>
          </Column>

          <Column>
            <Heading>EXPLORE</Heading>
            <FooterLink href="#">Color Picker</FooterLink>
            <FooterLink href="#">Emoji Cheat Sheet</FooterLink>
            <FooterLink href="#">Conversion Rate Calculator</FooterLink>
            <FooterLink href="#">SEO in Digital Marketing</FooterLink>
            <FooterLink href="#">SEO vs.SEM</FooterLink>
            <FooterLink href="#">Return on Ad Spend</FooterLink>
            <FooterLink href="#">ROAS</FooterLink>
          </Column>

          <Column>
            <Heading>KNOWLEDGEBASE</Heading>
            <FooterLink href="#">Digital Marketing</FooterLink>
            <FooterLink href="#">SEO</FooterLink>
            <FooterLink href="#">PPC</FooterLink>
            <FooterLink href="#">Content Marketing</FooterLink>
            <FooterLink href="#">Social Media</FooterLink>
            <FooterLink href="#">Web Design</FooterLink>
            <FooterLink href="#">Amazon</FooterLink>
          </Column>

          <Column>
            <Heading>SERVICES</Heading>
            <FooterLink href="#">Digital Marketing Services</FooterLink>
            <FooterLink href="#">SEO Services</FooterLink>
            <FooterLink href="#">PPC Services</FooterLink>
            <FooterLink href="#">Content Marketing Services</FooterLink>
            <FooterLink href="#">Social Media Services</FooterLink>
            <FooterLink href="#">Web Design Services</FooterLink>
            <FooterLink href="#">Digital Advertising Services</FooterLink>
          </Column>
          <Column>
            <Heading>COMAPNY</Heading>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Comunity Impact</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Locations</FooterLink>
            <FooterLink href="#">Phising Scam Alert</FooterLink>
            <FooterLink href="#">Tools</FooterLink>
          </Column>

          <Column>
            <Heading>ROLES</Heading>
            <FooterLink href="#">Digital Marketing Agency</FooterLink>
            <FooterLink href="#">SEO Agency</FooterLink>
            <FooterLink href="#">PPC Agency</FooterLink>
            <FooterLink href="#">Content Marketing Agency</FooterLink>
            <FooterLink href="#">Social Media Agency</FooterLink>
            <FooterLink href="#">Web Design Agency</FooterLink>
            <FooterLink href="#">Industries We Serve</FooterLink>

            {/* <Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink> */}
            {/* <FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink> */}
            {/* <FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink> */}
            {/* <FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink> */}
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
