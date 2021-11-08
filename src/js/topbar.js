export const topbar = {
	type: "space",
	rows: [
		{
			height: 30,
			cols: [
				{
					view: "label",
					label: "Contacts",
					width: 75
				},
				{
					view: "icon",
					icon: "mdi mdi-plus-circle"
				},
				{}
			]
		},
		{
			view: "search",
			placeholder: "Search"
		}
	]
};
