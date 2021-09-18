import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { SearchBar } from '../components/search-bar'
import { MapCanvas } from '../components/map-canvas'
import { SlidingUpPanel } from '../components/sliding-up-panel'

const Container = styled.div``

const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {}, [searchQuery])

  return (
    <Container>
      <SearchBar
        value={searchQuery}
        placeholder="Type Here..."
        onChangeText={(e) => {
          setSearchQuery(e.target.value)
        }}
      />
      <main>
        <MapCanvas />
        <SlidingUpPanel />
      </main>
    </Container>
  )
}

export default Index
