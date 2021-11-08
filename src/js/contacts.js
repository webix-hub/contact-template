import {dataContacts} from "../data/dataContacts";

export const contacts = {
	view: "list",
	select: true,
	type: {
		height: 56,
		margin: 5,
		css: "contact",
		template(obj) {
			return `
				<div class="contactInner">
					<div class="contactImg">
						<img src="./contacts/${obj.img}" alt="${obj.name}" />
					</div>
					<div class="contactInfo">
						<span class="contactName">${obj.name}</span>
						<span class="contactEmail">${obj.email}</span>
					</div>
					<div class="contactButtons">
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
				</div>
			`;
		}
	},
	ready() {
		const id = this.getFirstId();
		this.select(id);
	},
	data: dataContacts
};
