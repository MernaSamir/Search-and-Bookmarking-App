import RepositoriesList from '../modules/repositories'
import { searchRepos } from '../services'

export default function Repositories (props: any) {
  return <RepositoriesList {...props} />
}

export async function getServerSideProps(ctx: {
  locale: string
  query: any
  
}) {
  const {  query } = ctx
 
  try {
  
    const {data:r} = await searchRepos( 
    query.search,
       query.page,
    
    )
    const totalPages = r.total_count ? parseInt(r?.total_count) : 1
  
    return {
      props: {
        initialData: {
        
          items: r.items,
          totalPages,
        },
      },
    }
  } catch (err) {
    return {
      props: {
        initialData: {},
        error: 'Failed to fetch repositories. Please try again later.',

      },
    }
  }
}
