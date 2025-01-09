import { MagnifyingGlass } from '@phosphor-icons/react'
import { Container } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/transactions-context'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query)
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}
