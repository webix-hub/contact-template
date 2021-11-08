import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {userMenu} from "./js/userMenu";
import {topbar} from "./js/topbar";
import {contacts} from "./js/contacts";
import {contactBig} from "./js/contactBig";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		css: "bgLight",
		cols: [
			{
				gravity: 0.01
			},
			{
				maxWidth: 1410,
				rows: [
					header,
					{
						type: "line",
						cols: [
							sidebar,
							{
								rows: [
									topbar,
									contacts
								]
							},
							contactBig
						]
					}
				]
			},
			{
				gravity: 0.01
			}
		]
	});

	webix.ui(userMenu);
});
