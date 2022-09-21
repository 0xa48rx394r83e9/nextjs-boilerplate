import type { NextPage } from 'next'
import Head from 'next/head'

import CounterPanel from '@/contexts/CounterPanel'
//import Counter from '@/components/Counter'

import styles from '@/styles/Home.module.css'

const IndexPage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Redux Toolkit</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CounterPanel />
		</div>
	)
}

export default IndexPage