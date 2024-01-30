import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './registry';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Clima Tempo',
  description: 'Clima e Previsão do Tempo'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <StyledComponentsRegistry>
        <body className={roboto.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
