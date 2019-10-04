import React from 'react'
import { FixedSizeList } from 'react-window'
import { Button } from '../../../ui/molecules'
import { ConditionalList } from '../../../ui/organisms'

export const FavoriteDialogsList = ({ list, renderEmpty }) => (
  <ConditionalList
    data={list}
    renderEmpty={renderEmpty}
    renderExists={list => (
      <FixedSizeList
        height={70}
        itemCount={list.length}
        itemSize={50}
        layout='horizontal'
        width={450}
      >
        {({ style, index }) => (
          <FavoriteItem index={index} style={style} list={list} />
        )}
      </FixedSizeList>
    )}
  />
)

const FavoriteItem = ({ index, style, list }) => (
  <div style={style}>
    <Button buttonType='favorite'>BT</Button>
  </div>
)
