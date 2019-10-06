import React from 'react'
// import { FixedSizeList } from 'react-window'
import { Button } from '../../../ui/molecules'
import { ConditionalList } from '../../../ui/organisms'

export const FavoriteDialogsList = ({ list, renderEmpty }) => (
  <ConditionalList
    data={list}
    renderEmpty={renderEmpty}
    renderExists={
      list =>
        list.map((item, index) => <FavoriteItem key={index} item={item} />)
      // <FixedSizeList
      //   height={70}
      //   itemCount={list.length}
      //   itemSize={50}
      //   layout='horizontal'
      //   width={500}
      // >
      //   {({ style, index }) => (
      //     <FavoriteItem index={index} style={style} list={list} />
      //   )}
      // </FixedSizeList>
    }
  />
)

const FavoriteItem = ({ index, item }) => (
  <div>
    <Button buttonType='favorite'>{item}</Button>
  </div>
)
