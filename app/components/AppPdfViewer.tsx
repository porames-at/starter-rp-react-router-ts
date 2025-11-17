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
