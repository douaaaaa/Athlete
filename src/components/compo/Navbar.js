import React from 'react'
import { Flex, Logo, Nav } from '../styled/Nav.styled'
import { Button } from '../styled/Button.styled'

function Navbar() {
  return (
    <Nav>
      <div className=' outside'>
        <Flex>
          <Logo>
            <span>
              <div></div>
              <div></div>
            </span>
            <span>
              <div></div>
              <div></div>
            </span>
          </Logo>
          <Button phone>
            <i className="fa-solid fa-baseball"></i>
            <p>Athlete</p>
          </Button>
        </Flex>
        <Flex>
          <Button>About</Button>
          <Button>
            <p>price</p>
            <i className="fa-solid fa-angles-down"></i>
          </Button>
        </Flex>
      </div>
      <div className=' outside second'>
      <Flex>
        <Button circle>
          <i className=" fa-solid fa-magnifying-glass"></i>
        </Button>
        <Button>
          <p>Contact us</p>
          <div></div>
        </Button>
        <Button primary phone>
          <p>Free trial</p>
          <div></div>
        </Button>
      </Flex>
      </div>
    </Nav>
  )
}

export default Navbar