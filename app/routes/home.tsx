import { LazyAppPdfViewer } from "~/components/LazyAppPdfViewer";
import type { Route } from "./+types/home";

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
      <LazyAppPdfViewer pdfSrc={pdfSrc} />
      <h2>Without Toolbar</h2>
      <LazyAppPdfViewer
        pdfSrc={pdfSrc}
        showToolbar={false}
        defaultLayoutProps={{
          style: { width: "100%", height: "550px" },
        }}
      />
      <h2>Mobile</h2>
      <LazyAppPdfViewer
        pdfSrc={pdfSrc}
        defaultLayoutProps={{
          style: { width: "500px" },
        }}
      />
    </div>
  );
}
