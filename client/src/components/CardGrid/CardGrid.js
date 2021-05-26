import React from "react"
import ContentLoader from 'react-content-loader'
import { useSelector } from "react-redux"

import useStyles from "./styles"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 160 220"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="13" rx="0" ry="0" width="64" height="60" /> 
    <rect x="83" y="81" rx="0" ry="0" width="63" height="61" /> 
    <circle cx="41" cy="109" r="31" /> 
    <circle cx="114" cy="41" r="32" /> 
    <rect x="6" y="154" rx="0" ry="0" width="142" height="12" /> 
    <rect x="7" y="173" rx="0" ry="0" width="74" height="15" /> 
    <rect x="106" y="273" rx="0" ry="0" width="39" height="14" />
  </ContentLoader>
)

const CardGrid = ({ cardItems, connectionName }) => {
  const classes = useStyles()
  const connectionObj = useSelector((state) => state.connection);
  const connection = connectionObj[connectionName]
  const placeHolderTiles = ['','','','','','','',''].map((elem, i) => <MyLoader key={i} />)

  return (
    <div className={classes.cardGrid}>
        {cardItems} 
        {(connection === "pending") && (<>
          {placeHolderTiles}
        </>)}
    </div>
  )
}

export default CardGrid
