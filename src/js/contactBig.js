import {dataContact} from "../data/dataContact";
import {attachedFiles} from "./attachedFiles";

export const contactBig = {
	view: "scrollview",
	body: {
		type: "clean",
		width: 390,
		rows: [
			{
				view: "template",
				height: 556,
				template(obj) {
					return `
						<div class="contactBig">
							<div class="contactBigImg">
								<img src="./contact/${obj.img}" alt="${obj.name}" />
							</div>
							<div class="contactBigInfo">
								<span class="contactBigName">${obj.name}</span>
								<span class="contactLastVisit">Last visited: ${obj.lastVisit}</span>
							</div>
							<div class="contactBigButtons">
								<button type="button" class="contactButton webix_icon_button">
									<span class="webix_icon mdi mdi-message"></span>
								</button>
								<button type="button" class="contactButton webix_icon_button">
									<span class="webix_icon mdi mdi-phone"></span>
								</button>
								<button type="button" class="contactButton webix_icon_button">
									<span class="webix_icon mdi mdi-video"></span>
								</button>
								<button type="button" class="contactButton webix_icon_button">
									<span class="webix_icon mdi mdi-dots-vertical"></span>
								</button>
							</div>
							<div class="contactBigDetails">
								<span class="contactBigTitle">Email: </span>
								<span class="contactsBigCont">${obj.email}</span>
							</div>
							<div class="contactBigDetails">
								<span class="contactBigTitle">Phone: </span>
								<span class="contactsBigCont">${obj.phone}</span>
							</div>
							<div class="contactBigDetails">
								<span class="contactBigTitle">City: </span>
								<span class="contactsBigCont">${obj.city}</span>
							</div>
						</div>
					`;
				},
				data: dataContact
			},
			attachedFiles
		]
	}
};
