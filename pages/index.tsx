import Head from 'next/head'
import styled from 'styled-components';

const Header = styled.h1`
  color: ${({ theme }) => theme.h1.color};
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Club Pages</title>
        <meta name="description" content="Club Pages UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>Welcome to Club Pages!</Header>
      </main>

      <footer>

      </footer>
    </div>
  )
}
