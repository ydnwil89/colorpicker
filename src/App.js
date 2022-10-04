import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import './index.css'
import { Breadcrumb, Layout, Menu } from 'antd'
import { SketchPicker } from 'react-color'

const { Header, Content, Footer } = Layout;

export const App = () => {
  const [color, setColor] = useState('#ffffff');

  return (
  <Layout className="layout">
    <Header>
      <div className="logo">
      </div>
    </Header>
    <Content
      style={{
        padding: '10 50px',
      }}
    >
      <div className="site-layout-content" style={{ backgroundColor: color }}>
          <div className='myColorPicker'>
              <SketchPicker color={color} onChangeComplete={color => { setColor(color.hex) }} />
          </div>
          <div>
              <h1>You have selected color with hex code {color}</h1>
          </div>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      AVG Solutions ©2022 Created by Tamakoto
    </Footer>
  </Layout>
)}

export default App;