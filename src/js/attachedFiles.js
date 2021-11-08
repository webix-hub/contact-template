import {dataMedia, dataDocuments} from "../data/dataFiles";

const icons = {
	mp3: "./icons/MP3.svg",
	mp4: "./icons/MP4.svg",
	jpg: "./icons/JPEG.svg",
	pdf: "./icons/PDF.svg"
};

webix.type(webix.ui.list, {
	name: "filesType",
	height: 42,
	css: "fileRow",
	template(obj) {
		return `
			<div class="fileInner">
				<img class="fileIcon" src="${icons[obj.type] || ""}" alt="${obj.type}" />
				<span class="fileName">${obj.name}.${obj.type}</span>
				<span class="fileDownload mdi mdi-download mdi-18px"></span>
			</div>
		`;
	}
});

export const attachedFiles = {
	css: "attachedFiles",
	borderless: true,
	padding: 18,
	margin: 10,
	rows: [
		{
			borderless: true,
			header: "Media",
			body: {
				view: "list",
				autoheight: true,
				type: "filesType",
				data: dataMedia
			}
		},
		{
			borderless: true,
			header: "Documents",
			body: {
				view: "list",
				autoheight: true,
				type: "filesType",
				data: dataDocuments
			}
		}
	]
};
