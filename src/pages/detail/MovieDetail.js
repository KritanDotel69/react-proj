import React from 'react'
import { useParams } from 'react-router'

const MovieDetail = () => {

  const { id } = useParams();
  const { isLoading, isError, error, data } = m


  return (
    <div>

    </div>
  )
}

export default MovieDetail
