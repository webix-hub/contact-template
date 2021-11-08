export const userTemplate = {
	borderless: true,
	css: "user",
	width: 168,
	height: 44,
	template() {
		const html = `
			<div class="userInner">
				<span class="userAvatar">
					<img class="userImage" src="./avatar/avatar.png">
					<span class="status online"></span>
				</span>
				<span class="userName">
					<span>Kristian Klian</span>
					<span class="mdi mdi-menu-down mdi-24px"></span>
				</span>
			</div>`;
		return html;
	},
	onClick: {
		user() {
			const node = this.$view;
			const menu = webix.$$("user_menu");
			if (!menu.isVisible()) {
				menu.show(node);
			}
			else menu.hide();
		}
	}
};
