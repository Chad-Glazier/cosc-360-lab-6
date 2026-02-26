# COSC 360 Lab 6

## Setup

Once you've cloned the project, run:

```shell
npm install
```

This will install the dependencies for the project (you should see a `node_modules` folder appear). Next, you should be able to run the project:

```shell
npm run dev
```

This will start a development server and give you a link to view the webpage in your browser.

## To-Do

- Make the current user's information part of a "global" context.

## Additional Notes

### Including Icons

You can search for FontAwesome icons on [their website](https://fontawesome.com/search) and then copy the name to import it from the `@fortawesome/...` package. You can usually just start writing something like `import { faCircle...` and then let the auto-complete from the LSP decide which package to import the icon  from (there's a few of them). These are just icon definitions though, to use them in your JSX you need to use the `FontAwesomeIcon` component. E.g.,

```tsx
// Import the icon definition:
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

// Import the icon component which will actually display the icon:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Component() {
	return (
		// Now include the icon inside your component.
		<FontAwesomeIcon icon={faCircleUser} />
	)
}
```

Icons included this way are treated as text, not as images. They can be used neatly in text elements, like `p` and `h1`. They will also be colored and sized based on the CSS text properties like `color` and `font-size`.
