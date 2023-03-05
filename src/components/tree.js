import React from "react";
import { useEffect, useState } from "react";

export default function TreeNode(props) {
  const [node, setNode] = useState(props.node);

  useEffect(() => {
    // if(props.node?.parent) {
    console.log(props.node)
      setNode(props.node);
    // }
    return () => {};
  }, [props.node]);

  const onRemove = () => {
    const newNode = node.remove();
    props.onRemove(newNode);
  };

  const onSplit = () => {
    setNode(node.split());
  };

  console.log(node);

  return (
    <div>
      {node?.parent ?
      (<div>
          <label>{node.parent[0]}</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <TreeNode node={node?.parent[-1]} onRemove={setNode} />
            <TreeNode node={node?.parent[-2]} onRemove={setNode} />
          </div>
        </div>
      ) : (
        <div key={node?.id}>
          <button onClick={onRemove}>remove</button>
          <button onClick={onSplit}>split</button>
          {/*<label>{node?.id}</label>*/}
        </div>
      )}
    </div>
  );
}
