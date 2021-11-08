import {userTemplate} from "./userTemplate";

export const header = {
	view: "toolbar",
	paddingX: 10,
	paddingY: 6,
	cols: [
		{
			view: "icon",
			icon: "mdi mdi-menu"
		},
		{
			view: "label",
			label: "MESSENGER"
		},
		{},
		{
			view: "icon",
			icon: "mdi mdi-information"
		},
		{
			view: "icon",
			icon: "mdi mdi-bell",
			badge: 5
		},
		{
			width: 10
		},
		userTemplate
	]
};
