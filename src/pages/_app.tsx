import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux'

import { useApollo } from '@/services/graphql/apolloClient';
import { ApolloProvider } from '@apollo/client';
import store from '@/redux/store'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
    const apolloClient = useApollo({}, '');

	return (
        <SessionProvider session={session}>
            <ApolloProvider client={apolloClient}>
    		    <Provider store={store}>
    			    <Component {...pageProps} />
    		    </Provider>
            </ApolloProvider>
        </SessionProvider>
	)
}
