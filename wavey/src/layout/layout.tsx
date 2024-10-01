import "../global.css";
import "cal-sans";

const interFont = {
  fontFamily: "'Inter', sans-serif",
  "--font-inter": "Inter",
};

const calSansFont = {
  fontFamily: "'Cal Sans', sans-serif",
  "--font-calsans": "CalSans-SemiBold",
};

// Root component
export function RootLayout({ children }: any) {
  return (
    <html lang="en" style={{ ...interFont, ...calSansFont }}>
      <head>{/* <Analytics /> */}</head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
