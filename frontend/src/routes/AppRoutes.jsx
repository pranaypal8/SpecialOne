import React from 'react'
import {Route , BrowserRouter , Routes} from 'react-router-dom'
import Home from '../Screens/home'
import Collection from '../Screens/collection'

const approutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/collection" element={ <Collection /> }  />
        <Route path="/preview" element={<div>Preview</div>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default approutes
