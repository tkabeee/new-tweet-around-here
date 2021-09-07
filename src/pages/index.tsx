import styled from 'styled-components'

import { SearchBar } from '../components/search-bar'
import { MapCanvas } from '../components/map-canvas'
import { SlidingUpPanel } from '../components/sliding-up-panel'

const Container = styled.div``

const Index = () => {
  return (
    <Container>
      <SearchBar></SearchBar>
      <main>
        <MapCanvas></MapCanvas>
        <SlidingUpPanel></SlidingUpPanel>
      </main>
    </Container>
  )
}

export default Index
