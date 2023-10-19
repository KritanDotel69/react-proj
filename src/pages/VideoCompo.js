import React from 'react'
import ErrorPage from '../components/ErrorPage';

const VideoCompo = ({ id }) => {

  const { isError, isLoading, data, console, error } = useVideoByIdQuery(id);



  if (isLoading) {
    return <h1>....Loading</h1>
  }

  if (isError) {
    return <ErrorPage error={error} />
  }

  return (
    <div>
      <iframe className='w=full aspect-video' src={`https://www.youtube.com/embed/${data?.results[0]}`}></iframe>
    </div>
  )
}

export default VideoCompo
