import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Containt,
} from "./FooterStyles";

const FooterFir = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<Containt><i className="fa fa-map-marker">
				<span style={{ marginLeft: "10px" }}>
				Addres line 1
				</span>
			</i></Containt>
			<Containt>Addres line 2</Containt>
			<Containt><i className="fa fa-phone">
				<span style={{ marginLeft: "10px" }}>
				91-9998887766
				</span>
			</i></Containt>
			<FooterLink href="#"><i className="fa fa-envelope">
				<span style={{ marginLeft: "10px" }}>
				mail@gmail.com
				</span>
			</i></FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default FooterFir;
