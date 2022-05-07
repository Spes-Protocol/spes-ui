import { Client } from "@notionhq/client"
const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

export default async function handler(req, res) {
  let response;
  try {
    response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: `${req.body.email}`,
              },
            },
          ],
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
  res.status(200).json(response)
}
