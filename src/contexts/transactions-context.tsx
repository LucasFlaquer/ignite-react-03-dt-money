import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface ProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions')
    if (query) {
      url.searchParams.append('q', query)
    }
    console.log('fetching transactions', url)
    const response = await fetch(url)
    const data = await response.json()
    console.log('fetched transactions->', data)
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
