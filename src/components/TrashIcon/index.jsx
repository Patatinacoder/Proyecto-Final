import * as React from "react"

const TrashIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path
      fill="#8690fa"
      d="M16 31a15 15 0 1 1 15-15 15 15 0 0 1-15 15Zm0-29a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"
    />
    <circle cx={16} cy={16} r={12} fill="#cfd2fc" />
    <rect
      width={11}
      height={13}
      x={10.5}
      y={10.5}
      fill="#8690fa"
      rx={0.5}
      ry={0.5}
    />
    <path fill="#5153ff" d="M23 11.5H9a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1Z" />
    <path
      fill="#5153ff"
      d="M19 11.5h-6a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Zm-5.5-1h5v-1h-5Z"
    />
  </svg>
)

export default TrashIcon