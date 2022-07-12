const fs = require("fs")
const path = require("path")
const spaceImport = require("contentful-import")
const inquirer = require("inquirer")
const chalk = require("chalk")
const data = require("./data.json")

const argv = require("yargs-parser")(process.argv.slice(2))

console.log(`
  To set up this project you will need your Contentful Space ID
  and API access tokens. Please use an empty Contentful space for this.
  You can find all the needed information in your Contentful space under:
  ${chalk.yellow(
    `app.contentful.com ${chalk.red("->")} Space Settings ${chalk.red(
      "->"
    )} API keys`
  )}
  The ${chalk.green("Content Management API Token")}
    will be used to import and write data to your space.
  The ${chalk.green("Content Delivery API Token")}
    will be used to ship published production-ready content in your Gatsby app.

  Ready? Let's do it! 🎉
`)

const questions = [
  {
    name: "spaceId",
    message: "Your Space ID",
    when: !argv.spaceId && !process.env.CONTENTFUL_SPACE_ID,
    validate: (input) =>
      /^[a-z0-9]{12}$/.test(input) ||
      "Space ID must be 12 lowercase characters",
  },
  {
    name: "accessToken",
    when:
      !argv.accessToken &&
      !process.env.CONTENTFUL_ACCESS_TOKEN &&
      !argv.deliveryToken &&
      !process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    message: "Your Content Delivery API access token",
  },
  {
    name: "managementToken",
    when: !argv.managementToken && !process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    message: "Your Content Management API access token",
  },
]

inquirer
  .prompt(questions)
  .then(
    ({
      spaceId,
      managementToken,
      accessToken,
      // previewToken
    }) => {
      const {
        CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        CONTENTFUL_MANAGEMENT_TOKEN,
      } = process.env

      // env vars are given precedence followed by args provided to the setup
      // followed by input given to prompts displayed by the setup script
      spaceId = CONTENTFUL_SPACE_ID || argv.spaceId || spaceId
      managementToken =
        CONTENTFUL_MANAGEMENT_TOKEN || argv.managementToken || managementToken
      // Some scripts that set up this repo use `deliveryToken` and
      // `CONTENTFUL_DELIVERY_TOKEN`, instead of `accessToken` and
      // `CONTENTFUL_ACCESS_TOKEN`. Until all scripts are updated to
      // use `accessToken` and `CONTENTFUL_ACCESS_TOKEN` both variations
      // will work.
      accessToken =
        CONTENTFUL_ACCESS_TOKEN ||
        CONTENTFUL_DELIVERY_ACCESS_TOKEN ||
        argv.accessToken ||
        argv.deliveryToken ||
        accessToken

      console.log("Writing config file...")
      const configFiles = [`.env.development`, `.env.production`].map((file) =>
        path.join(__dirname, "..", file)
      )

      const fileContents = [
        `# All environment variables will be sourced`,
        `# and made available to gatsby-config.js, gatsby-node.js, etc.`,
        `# Do NOT commit this file to source control`,
        `CONTENTFUL_SPACE_ID='${spaceId}'`,
        `CONTENTFUL_ACCESS_TOKEN='${accessToken}'`,
      ]
        .filter(Boolean)
        .join("\n")

      configFiles.forEach((file) => {
        fs.writeFileSync(file, fileContents, "utf8")
        console.log(`Config file ${chalk.yellow(file)} written`)
      })

      fs.appendFileSync(
        ".env.development",
        '\n# To enable previews locally, uncomment the next line:\n# CONTENTFUL_HOST="preview.contentful.com"'
      )

      return { spaceId, managementToken }
    }
  )
  .then(({ spaceId, managementToken }) =>
    spaceImport({ spaceId, managementToken, content: data })
  )
  .then((_, error) => {
    console.log(
      `All set! You can now run ${chalk.yellow(
        "yarn start"
      )} to see it in action.`
    )
  })
  .catch((error) => console.error(error))
