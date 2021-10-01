import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { SearchBar } from '../components/search-bar'
import { MapCanvas } from '../components/map-canvas'
import { SlidingUpPanel } from '../components/sliding-up-panel'

const Container = styled.div``

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
          containerStyle={{}}
          backdropStyle={{}}
        >
          <div>
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
          </div>
        </SlidingUpPanel>
      </main>
    </Container>
  )
}

export default Index
