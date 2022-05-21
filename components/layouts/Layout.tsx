import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface LayoutProps {
    title?: string;
    children: JSX.Element;
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin);

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Mia Ramos" />
                <meta name="description" content={`Informacion sobre Pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                {/* og metatags */}
                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>
        </>
    )
}
