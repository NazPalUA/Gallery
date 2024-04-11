import useAppState from "../appState"
import CountMessage from "../components/UI/CountMessage"
import List from "../components/UI/List"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import UploadForm from "../components/UploadForm"
import { useGetStocksQuery } from "../firebase/firestore-database/queries"

function HomePage() {
  const { searchText } = useAppState()
  const { data, isLoading } = useGetStocksQuery(searchText || undefined)

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <UploadForm />
      <h1 className="text-center">Gallery</h1>
      {!data ? (
        <p className="text-center">No images found</p>
      ) : (
        <>
          <CountMessage count={data.length} />
          <List items={data} />
        </>
      )}
    </>
  )
}

export default HomePage
