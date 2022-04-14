import { FC } from "react"
import { TreeListProps, NodeInstance } from "./interface"
import { TreeNode } from "./tree-node"
import { List } from "@illa-design/list"
import { listCss } from "./style"

export const TreeList: FC<TreeListProps> = (props) => {
  const {
    listData = [],
    saveNodeCache,
    checkable,
    loadingMoreKeys,
    ...rest
  } = props

  return (
    <div>
      <List
        _css={listCss}
        data={listData}
        render={(data) => {
          let node: NodeInstance = (
            <TreeNode
              loadingMore={loadingMoreKeys && loadingMoreKeys.has(data.key)}
              _key={data.key}
              expanding={data?.expanding}
              {...data}
              checkable={data.checkable !== false && checkable}
              {...rest}
            />
          )
          saveNodeCache && saveNodeCache(data.key, node)
          return node
        }}
        renderRaw={true}
        bordered={false}
        renderKey={(data, index) => {
          return data.key + index
        }}
      />
    </div>
  )
}
