import { defineField } from "sanity";

export const schemaTypes = [
	{
		title: "My Example Document Type",
		name: "exampleDocumentType",
		type: "document",
		fields: [
			{
				title: "Title",
				name: "title",
				type: "string"
			},
			{
				title: "Slug",
				name: "slug",
				type: "string",
				options: {
					isUnique: true
				}
			},
			defineField({
				title: "Body",
				name: "body",
				type: "array",
				of: [
					{
						type: "block"
					},
					{
						type: 'image'
					}
				]
			}),
		]
	}
]
