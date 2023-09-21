import '../styles/main.scss';
import type { Metadata } from 'next';
import { Header, Footer } from '../components/theme';

export const metadata: Metadata = {
  title: 'App',
  description: 'App description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="wrapper">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
