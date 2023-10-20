import React from 'react'
import {
  Button,
  Input,
} from "@material-tailwind/react";


const Search = () => {
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="search movies"
        color='white'
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color='white'
        className="!absolute right-1 top-1 rounded"
      >
        Submit
      </Button>
    </div>
  )
}

export default Search