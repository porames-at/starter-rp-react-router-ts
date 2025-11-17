# React PDF Starter Toolkit in React Router and TypeScript


[![Open example in codesandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)]()

Welcome to the React PDF Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF with React Router and TypeScript. It showcases how React PDF can be integrated and rendered as part of a React.js project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/react-pdf-dev/starter-rp-react-router-ts.git
   cd starter-rp-react-router-ts
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm, yarn, pnpm or bun.

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Example Project

This repository includes an example project to demonstrate React PDF in action.

1. **Start the Development Server**: Use the following command to start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```tsx
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPConfig,
  type RPProviderProps,
  type RPLayoutProps,
} from "@pdf-viewer/react";

interface Props {
  showToolbar?: boolean;
  pdfSrc : string;
  providerProps?: RPProviderProps;
  defaultLayoutProps?: RPLayoutProps;
}

const AppPdfViewer = (props : Props) => {
  const { showToolbar = true, defaultLayoutProps, pdfSrc } = props;
  return (
    <RPConfig licenseKey="YOUR_LICENSE_KEY">
      <RPProvider src={pdfSrc}>
        {showToolbar ? (
          <RPDefaultLayout {...defaultLayoutProps}>
            <RPPages />
          </RPDefaultLayout>
        ) : (
          <div style={{ width: "100%", height: "550px" }}>
            <RPPages />
          </div>
        )}
      </RPProvider>
    </RPConfig>
  );
};

export default AppPdfViewer;
```

2. **Use the component in the page**: Add the React PDF component to your page

```tsx
import type { Route } from "./+types/home";
import AppPdfViewer from "~/components/AppPdfViewer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RP Starter Toolkit: React Router + TypeScript" },
    { name: "description", content: "Welcome to React Router + TypeScript!" },
  ];
}

export default function Home() {
  const pdfSrc =
    "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";
  return (
    <div className="container">
      <h1>RP Starter Toolkit: React Router + TypeScript</h1>
      <br />
      <h2>Default Toolbar</h2>
      <AppPdfViewer pdfSrc={pdfSrc} />
      <h2>Without Toolbar</h2>
      <AppPdfViewer
        pdfSrc={pdfSrc}
        showToolbar={false}
        defaultLayoutProps={{
          style: { width: "100%", height: "550px" },
        }}
      />
      <h2>Mobile</h2>
      <AppPdfViewer
        pdfSrc={pdfSrc}
        defaultLayoutProps={{
          style: { width: "500px" },
        }}
      />
    </div>
  );
}

```

## Examples

For more examples, please refer to the `src/routes/home.tsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf.dev) site.

## Meta

- Homepage: [https://www.react-pdf.dev](https://www.react-pdf.dev)
- Docs: [https://docs.react-pdf.dev](https://docs.react-pdf.dev)

---

Thank you for using React PDF! We hope this toolkit helps you build amazing React.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!