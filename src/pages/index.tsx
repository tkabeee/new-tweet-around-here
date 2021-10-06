import { useEffect, useState } from 'react'
import { Text, View, Dimensions, Animated } from 'react-native'
import styled from 'styled-components'
import SlidingUpPanel from 'rn-sliding-up-panel'

import { SearchBar } from '../components/search-bar'
import { MapCanvas } from '../components/map-canvas'

const { height } = Dimensions.get('window')

const Container = styled.div``

const Panel = styled.div`
  flex: 1;
  backgroundcolor: white;
  position: relative;
`

const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showPanel, setShowPanel] = useState<boolean>(false)

  useEffect(() => {}, [searchQuery])

  // tweet検索を実行
  // パネルをアクティブ化
  // パネルをスライドアップ

  return (
    <Container>
      <SearchBar
        value={searchQuery}
        onChangeText={(e) => {
          setSearchQuery(e.target.value)
        }}
        onClickSearch={(e) => {
          console.log('search')
        }}
      />
      <main>
        <MapCanvas />
        <SlidingUpPanel
          height={300}
          draggableRange={{
            top: 0,
            bottom: 0,
          }}
          snappingPoints={[360]}
          friction={0.5}
        >
          <Panel>
            <div>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
              <dl>
                <dt>dummy title</dt>
                <dd>dummy text</dd>
                <dd>dummy text</dd>
              </dl>
            </div>
          </Panel>
        </SlidingUpPanel>
      </main>
    </Container>
  )
}

export default Index
