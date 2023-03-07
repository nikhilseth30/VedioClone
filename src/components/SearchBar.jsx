import { InputGroup, Form, Button, Stack } from "react-bootstrap"
import { useState } from 'react'



const SearchBar = ({onSubmit}) =>{
  const [search,setSearch] = useState('')
  

    return <InputGroup className="mt-4">
      <Form onSubmit={(e)=>{
        e.preventDefault()
        onSubmit(search)

      }}>
        <Stack direction ="horizontal" gap={3}>
    <Form.Control
      placeholder="Search..."
      aria-label="Recipient's username"
      aria-describedBy="basic-addon2"
      onChange={e =>setSearch(e.target.value)}
      value={search}
    />
    
    <Button type="submit" variant="primary" id="basic-addon2">Search</Button>
    </Stack>
    </Form>
  </InputGroup>

}

export default SearchBar