import React from "react"
import ContentLoader from "react-content-loader"

const TodoItemLoading = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="14" rx="5" ry="5" width="275" height="10" /> 
    <rect x="52" y="63" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
)

export { TodoItemLoading }