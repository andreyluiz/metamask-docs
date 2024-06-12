---
description: Display custom user interface components using JSX.
sidebar_position: 4
---

# Custom UI with JSX

:::flaskOnly
:::

You can display custom user interface (UI) JSX components using the
[`@metamask/snaps-sdk`](https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk) module when
implementing the following features:

- [Dialogs](dialogs.md)
- [Home pages](home-pages.md)
- [Transaction insights](../../reference/entry-points.md#ontransaction)
- [Signature insights](../signature-insights.md)

To use custom UI with JSX, first install [`@metamask/snaps-sdk`](https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk)
using the following command:

```bash
yarn add @metamask/snaps-sdk
```

Then, whenever you're required to return a custom UI JSX component, import the components from the
SDK at `@metamask/snaps-sdk/jsx` and build your UI with them.
For example, to display a [`Box`](#box) (the [`panel`](./index.md#panel) function equivalent) using [`snap_dialog`](../../reference/snaps-api.md#snap_dialog):

```javascript title="index.js"
import { Box, Heading, Text } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Heading>Alert heading</Heading>
        <Text>Something happened in the system.</Text>
      </Box>
    ),
  },
});
```

## Components

The following custom UI JSX components are available:

### `Address`

Outputs a formatted text field for an Ethereum address. 
The address is automatically displayed with a jazzicon and truncated value. 
Hovering the address shows the full value in a tooltip.

#### Example

```javascript title="index.js"
import { Box, Heading, Address } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Heading>Are you sure you want to send tokens to this address?</Heading>
        <Address>0x000000000000000000000000000000000000dEaD</Address>
      </Box>
    ),
  },
});
```

<div class="row">
    <div class="column">
        <img src={require("../../assets/custom-ui-address.png").default} alt="Address UI example" width="450px" style={{border: '1px solid #DCDCDC'}} />
    </div>
    <div class="column">
        <img src={require("../../assets/custom-ui-address-tooltip.png").default} alt="Address tooltip UI example" width="450px" style={{border: '1px solid #DCDCDC'}} />
    </div>
</div>

### `Bold`

Outputs bold text.

#### Example

```javascript title="index.js"
import { Box, Heading, Text, Bold } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>
          This is <Bold>bold</Bold>.
        </Text>
      </Box>
    ),
  },
});
```

### `Box`

Outputs a box, which can be used as a container for other components. 
This component takes an array of custom UI JSX components.

#### Example

```javascript title="index.js"
import { Bold, Box, Heading, Text } from '@metamask/snaps-sdk/jsx';

module.exports.onTransaction = async ({ transaction }) => {
  const gasFeesPercentage = /* Calculate gas fees percentage */;
  return {
    content: (
      <Box>
        <Heading>Transaction insights</Heading>
        <Text>
          As set up, you are paying <Bold>{gasFeesPercentage.toFixed(2)}%</Bold> in gas fees for this transaction.
        </Text>
      </Box>
    ),
  };
};
```

<p align="center">
<img src={require("../../assets/custom-ui-panel.png").default} alt="Panel UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Button`

Outputs a button that the user can select.
For use in [interactive UI](interactive-ui.md).

#### Props

- `children`: `string` - The text of the button.
- `type`: `string` - (Optional) Possible values are `button` or `submit`.
  The default is `button`.
- `name`: `string` - (Optional) The name that will be sent to [`onUserInput`](../../reference/entry-points.md#onuserinput)
  when a user selects the button.
- `variant` - (Optional) Determines the appearance of the button.
  Possible values are `primary` or `secondary`.
  The default is `primary`.

#### Example

```javascript
import { Box, Heading, Button } from '@metamask/snaps-sdk/jsx';

const interfaceId = await snap.request({
  method: "snap_createInterface",
  params: {
    ui: (
      <Box>
        <Heading>Interactive interface</Heading>
        <Button name="interactive-button">Click me</Button>
      </Box>
    ),
  },
});

await snap.request({
  method: "snap_dialog",
  params: {
    type: "Alert",
    id: interfaceId,
  },
});

```

<p align="center">
<img src={require("../../assets/custom-ui-button.png").default} alt="Button UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Copyable`

Outputs a read-only text field with a copy-to-clipboard shortcut.

#### Example

```javascript title="index.js"
import { Box, Text, Copyable } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Text>Your address:</Text>
        <Copyable>0x000000000000000000000000000000000000dEaD</Copyable>
      </Box>
    ),
  },
});
```

<p align="center">
<img src={require("../../assets/custom-ui-copyable.png").default} alt="Copyable UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Divider`

Outputs a horizontal divider.

#### Example

```javascript title="index.js"
import { Box, Heading, Divider, Text } from '@metamask/snaps-sdk/jsx';

module.exports.onHomePage = async () => {
  return {
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Divider />
        <Text>Welcome to my Snap home page!</Text>
      </Box>
    ),
  };
};
```

<p align="center">
<img src={require("../../assets/custom-ui-divider.png").default} alt="Divider UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `form`

Outputs a form for use in [interactive UI](interactive-ui.md).

#### Props

- `name`: `string` - The name that will be sent to [`onUserInput`](../../reference/entry-points.md#onuserinput)
  when a user interacts with the form.
- `children`: `array` - An array of [`Input`](#input) or [`Button`](#button) components.

#### Example

```js
import { Form, Input, Button } from '@metamask/snaps-sdk/jsx';

const interfaceId = await snap.request({
  method: "snap_createInterface",
  params: {
    ui: (
      <Form name="form-to-fill">
        <Input name="user-name" placeholder="Your name" />
        <Button type="submit">Submit</Button>
      </Form>
    ),
  },
});

await snap.request({
  method: "snap_dialog",
  params: {
    type: "Alert",
    id: interfaceId,
  },
});
```

<p align="center">
<img src={require("../../assets/custom-ui-form.png").default} alt="Form UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Heading`

Outputs a heading.
This is useful for [`Box`](#box) titles.

#### Example

```javascript title="index.js"
import { Box, Heading, Text } from '@metamask/snaps-sdk/jsx';

module.exports.onHomePage = async () => {
  return {
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>Welcome to my Snap home page!</Text>
      </Box>
    ),
  };
};
```

<p align="center">
<img src={require("../../assets/custom-ui-heading.png").default} alt="Divider UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Image`

Outputs an image. 
This component takes an inline SVG.
It does not support remote URLs.

You can import SVG, PNG, and JPEG files using an import statement.
These files are automatically imported as SVG strings, so you can pass them directly to the `Image` component.

The SVG is rendered within an `<img>` tag, which prevents JavaScript or interaction events from
being supported.

:::note
To disable image support, set the [`features.images`](../../reference/cli/options.md#featuresimages)
configuration option to `false`.
The default is `true`.
:::

#### Props

- `src`: `string` - An inline SVG.
- `alt`: `string` - An optional alternative text for the image.

#### Example

```javascript title="index.js"
import { Box, Heading, Text, Image } from '@metamask/snaps-sdk/jsx';
import svgIcon from "./path/to/icon.svg";

module.exports.onHomePage = async () => {
  return {
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>Welcome to my Snap home page!</Text>
        <Image src={svgIcon} />
      </Box>
    ),
  };
};
```

<p align="center">
<img src={require("../../assets/custom-ui-image.png").default} alt="Divider UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

:::note
See the [`@metamask/images-example-snap`](https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/images)
package for a full example of implementing images.
:::

### `Input`

Outputs an input component for use in [interactive UI](interactive-ui.md).

#### Props

- `name`: `string` - The name that will be used as a key to the event sent to
  [`onUserInput`](../../reference/entry-points.md#onuserinput) when the containing form is submitted.
- `type`: `string` - (Optional) Type of input.
  Possible values are `text`, `number`, or `password`.
  The default is `text`.
- `placeholder`: `string` - (Optional) The text displayed when the input is empty.
- `label`: `string` (Optional) The text displayed alongside the input to label it.
- `value`: `string` (Optional) The default value of the input.

#### Example

```js
import { Form, Input, Button } from '@metamask/snaps-sdk/jsx';

const interfaceId = await snap.request({
  method: "snap_createInterface",
  params: {
    ui: (
      <Form name="form-to-fill">
        <Input name="user-name" placeholder="Your name" />
        <Button type="submit">Submit</Button>
      </Form>
    ),
  },
});

await snap.request({
  method: "snap_dialog",
  params: {
    type: "Alert",
    id: interfaceId,
  },
});
```

<p align="center">
<img src={require("../../assets/custom-ui-form.png").default} alt="Form UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Italic`

Outputs italic text.

#### Example

```javascript title="index.js"
import { Box, Heading, Text, Italic } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>
          This is <Italic>italic</Italic>.
        </Text>
      </Box>
    ),
  },
});
```

### `Link`

The [`Text`](#text) component accepts inline links.

#### Props

- `href`: `string` - The URL to point to.
- `children`: Array< `string` | `Bold` | `Italic` > - The text to be clicked.

#### Example

```javascript title="index.js"
import { Box, Heading, Link, Text } from '@metamask/snaps-sdk/jsx';

module.exports.onHomePage = async () => {
  return {
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>
          Download <Link href="https://metamask.io">MetaMask</Link>.
        </Text>
        <Text>
          Read the MetaMask docs at <Link href="https://docs.metamask.io">MetaMask docs</Link>.
        </Text>
      </Box>
    ),
  };
};
```

<p align="center">
<img src={require("../../assets/custom-ui-links.png").default} alt="Links UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Row`

Outputs a row with a label and value, which can be used for key-value data.
The label must be a string. The value can be a child component of type
[`Text`](#text), [`Image`](#image), or [`Address`](#address).

#### Props

- `label`: `string` - The label of the row
- `variant`: `string` - Optional, the variant of the label. Can be one of `default`, `error`, or `warning`.
- `children`: `Address` | `Image` | `Text` - The value of the row.

#### Example

```javascript title="index.js"
import { Box, Row, Text, Address } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Row label="Address">
          <Address>0x000000000000000000000000000000000000dEaD</Address>
        </Row>
        <Row label="Balance">
          <Text>1.78 ETH</Text>
        </Row>
      </Box>
    ),
  },
});
```

<p align="center">
<img src={require("../../assets/custom-ui-row.png").default} alt="Row UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Spinner`

Outputs a loading indicator.

#### Example

```javascript title="index.js"
import { Box, Heading, Spinner } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Heading>Please wait...</Heading>
        <Spinner />
      </Box>
    ),
  },
});
```

<p align="center">
<img src={require("../../assets/custom-ui-spinner.gif").default} alt="Spinner UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

### `Text`

Outputs text. 

#### Example

```javascript title="index.js"
import { Box, Heading, Text } from '@metamask/snaps-sdk/jsx';

module.exports.onHomePage = async () => {
  return {
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>Welcome to my Snap home page!</Text>
      </Box>
    ),
  };
};
```

<p align="center">
<img src={require("../../assets/custom-ui-heading.png").default} alt="Text UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>

## Emojis

Text-based components (such as [`Heading`](#heading) and [`Text`](#text)) accept emojis.

#### Example

```javascript title="index.js"
import { Box, Heading, Text } from '@metamask/snaps-sdk/jsx';

await snap.request({
  method: "snap_dialog",
  params: {
    type: "alert",
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>This is an apple 🍎 and this is an orange 🍊.</Text>
      </Box>
    ),
  },
});
```

<p align="center">
<img src={require("../../assets/custom-ui-emojis.png").default} alt="Emojis UI example" width="450px" style={{border: "1px solid #DCDCDC"}} />
</p>