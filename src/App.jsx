import { useState } from 'react'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './assets/store'
import { Routes,Route } from 'react-router'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'



function App() {
  

  return (
    <>
    <Provider store={store}>
    <Head/>
    
    <Routes>
        <Route path='/' element={<Body/>}>
            <Route index element={<MainContainer/>}/>
            <Route path='video/:id' element={<WatchPage/>}/>
        </Route>
        <Route path="*" element={<h2>404-Page Not Found</h2>}/>
    </Routes>
    </Provider>
    
    </>
  )
}

export default App
