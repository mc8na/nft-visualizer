import styled from 'styled-components'
import { NFTCard } from './components/NFTCard';
import { useState } from "react"
import { NFTModal } from './components/NFTModal';

function App() {

  let nfts = 
  [
    { name: "Artistic Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Artist.jpg"},
    { name: "Battlestar Galactica Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/BG.jpg"},
    { name: "Calvin Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Calvin.jpg"},
    { name: "Cardinal Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Cardinal.jpeg"},
    { name: "Chef Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Chef.jpg"},
    { name: "Curie Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Curie.jpeg"},
    { name: "Einstein Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Einstein.jpeg"},
    { name: "Habsburg Squirrel", symbol: "Squirrels are Cool", copies: 1000, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Habsburg.jpg"},
    { name: "Henry VIII Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/HenryVIII.jpg"},
    { name: "Hot Dog Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/HotDog.jpg"},
    { name: "Lebron Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Lebron.jpeg"},
    { name: "Martin Luther Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Luther.jpg"},
    { name: "Matador Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Matador.jpg"},
    { name: "Maxwell Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Maxwell.jpg"},
    { name: "Metternich Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Metternich.jpg"},
    { name: "Napoleon Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Napoleon.jpg"},
    { name: "Nostalgia Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Nostalgia.jpg"},
    { name: "Pirate Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Pirate.jpg"},
    { name: "Redshirt Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Redshirt.jpg"},
    { name: "Roman Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Roman.jpg"},
    { name: "Saint Olga Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/SaintOlga.jpg"},
    { name: "Santa Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Santa.jpg"},
    { name: "Shakespeare Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Shakespeare.jpg"},
    { name: "Shakespeare Squirrel 2.0", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Shakespeare2_0.jpg"},
    { name: "Shakespeare Squirrel 2.1", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Shakespeare2_1.jpg"},
    { name: "Shakespeare Squirrel 3.0", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Shakespeare3_0.jpg"},
    { name: "Shakespeare Squirrel 4.0", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Shakespeare4_0.jpg"},
    { name: "Sith Lord Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Sith.jpg"},
    { name: "McDonald's Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Supersize.jpg"},
    { name: "Urkel Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/Urkel.jpg"},
    { name: "Wrecking Squirrel", symbol: "Squirrels are Cool", copies: 100, image: "https://gateway.pinata.cloud/ipfs/QmYhHyAtyEzJrnb82wKQG34r597BXSxF8M95ZSnMAwFvUC/WreckingBall.jpg"},
  ]

  const [showModal, setShowModal] = useState(false)
  const [selectedNft, setSelectedNft] = useState()

  function toggleModal(i) {
    if (i >= 0) {
      setSelectedNft(nfts[i])
    }
    setShowModal(!showModal)
  }

  return (
    <div className="App">
    <Container>
      <Title> Squirrels are Cool </Title>
      <Subtitle> Hey look, a squirrel! </Subtitle>
      <Grid>
      {
        nfts.map((nft, i) =>
          <NFTCard nft={nft} key={i} toggleModal={ () => toggleModal(i) }/>
        )
      }
      </Grid>
    </Container>
    {
      showModal && 
      <NFTModal 
        nft = {selectedNft}
        toggleModal={ () => toggleModal() }
      />
    }
    </div>
  );
}

const Title = styled.h1`
  margin: 0;
  text-align: center;
`

const Subtitle = styled.h4`
  color: gray;
  margin-top: 0;
  text-align: center;
`

const Container = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: auto;
  margin-top: 100px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
`

export default App;
