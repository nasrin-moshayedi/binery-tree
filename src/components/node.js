// let id = 0;

// export default class Node {
//   constructor(parent, children) {
//     this.id = id++;
//     this.children = children ? children : null;
//     this.parent = parent ? parent : null;
//   }
//
//   replaceChild(child, newChild) {
//     console.log(this.children)
//     const index = this.parent.findIndex((node) => node === child);
//     if (index >= 0) {
//       this.parent[index] = newChild;
//     }
//   }
//
//   split() {
//     const node = new Node(this.parent);
//     node.children = [this, new Node(node)];
//     this.parent = node;
//     if (node.parent) {
//       node.parent.replaceChild(this, node);
//     }
//     return node;
//   }
//
//   remove() {
//     const parent = this.parent;
//     if (!parent) {
//       return this;
//     }
//     const sibling = parent.children.find((child) => child !== this);
//     sibling.parent = parent.parent;
//     if (parent.parent) {
//       parent.parent.replaceChild(parent, sibling);
//     }
//     this.reset();
//     return sibling;
//   }
//
//   reset() {
//     this.children = null;
//     this.parent = null;
//   }
//
//   printTree() {
//     let root = this;
//     while (root && root.parent) {
//       root = root.parent;
//     }
//
//     console.log(root);
//   }
// }

import React from "react";

export default Node = ({data}) => {
  console.log(data)
  return <div className="nodes">
    {data?.split(" ")?.map((item, inx) => {
      if(item.length > 0) {
        if(inx=== 0) {
          return <div className="node">{item}</div>
        }
        else if(inx%2 === 1) {
          return <div className="nodeLeft node" style={{left: `-${(inx+1)*25}px`}}>{item}</div>
        }
        else if (inx%2 === 0) {
          return <div className="nodeRight node" style={{right: `-${inx*25}px`}}>{item}</div>
        }
        else return ;
      }
      else return ;



    })}
  </div>
}