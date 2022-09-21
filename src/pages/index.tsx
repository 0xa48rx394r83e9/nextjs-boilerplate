import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '@/components/Counter'
import styles from '@/styles/Home.module.css'

const IndexPage: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Redux Toolkit</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Counter />
		</div>
	)
}

export default IndexPage