import React from "react";
import Footer from "../Components/footer/index";
import { Icon } from "../Components/Icons/styles/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Rentals</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Agents</Footer.Link>
            <Footer.Link href="#">Builders</Footer.Link>
            <Footer.Link href="#">Architects</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">United States</Footer.Link>
            <Footer.Link href="#">Canada</Footer.Link>
            <Footer.Link href="#">Maldives</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
