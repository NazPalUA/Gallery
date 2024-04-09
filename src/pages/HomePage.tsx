import useAppState from "../appState"
import List from "../components/List"
import LoadingSpinner from "../components/LoadingSpinner"
import CountMessage from "../components/UI/CountMessage"
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
