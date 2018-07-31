import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        counterHyva: 0,
        counterNeutraali: 0,
        counterHuono: 0
      }
    }
  
    asetaArvoon = (arvo,laskuri) => {
      switch(laskuri) {
        case 1:
            return () => {
                this.setState({ counterHyva: arvo })
            }
        case 2:
            return () => {
                this.setState({ counterNeutraali: arvo })
            }
        case 3:
            return () => {
                this.setState({ counterHuono: arvo })
            }
        default:
            console.log('Unknown button')
      } 
    }
  
    render() {
      return (
        <div>
            <h1>Anna palauteteta</h1>
          <div>
            <Button handleClick={this.asetaArvoon(this.state.counterHyva + 1,1)} text="Hyvä"/>
            <Button handleClick={this.asetaArvoon(this.state.counterNeutraali + 1,2)} text="Neutraali"/>
            <Button handleClick={this.asetaArvoon(this.state.counterHuono + 1,3)} text="Huono"/>
          </div>
          <Statistics hyvat={this.state.counterHyva} neutraalit={this.state.counterNeutraali} huonot={this.state.counterHuono} />
        </div>
      )
    }
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Statistics = ( {hyvat, neutraalit, huonot} ) => {
    let yhteensa = hyvat+neutraalit+huonot
    if (yhteensa === 0) {
        return (
            <div>
            <h2>Statistiikka</h2>
            <div>ei yhtään palautetta annettu</div>
            </div>
        )
    }
    return (
      <div>
    <h2>Statistiikka</h2>
    <table>
    <tbody>
    <tr><td>hyvä</td><td>{hyvat}</td></tr>
    <tr><td>Neutraali</td><td>{neutraalit}</td></tr>
    <tr><td>Huono</td><td>{huonot}</td></tr>
    </tbody>
    <Statistic hyvat={hyvat} neutraalit={neutraalit} huonot={huonot} />
    </table>
    </div>
  )
  }

  const Statistic = ( {hyvat, neutraalit, huonot} ) => {
    let yhteensa = hyvat+neutraalit+huonot
    let keskiarvo = ((hyvat * 1) + (neutraalit*0) + (huonot* -1))  / yhteensa
    keskiarvo = Math.round(keskiarvo * 10) / 10

    let positiivisa = hyvat/ yhteensa * 100
    positiivisa = Math.round(positiivisa * 10) / 10

    return (
        <tbody>
            <tr><td>Keskiarvo</td><td>{keskiarvo}</td></tr>
            <tr><td>Positiivisia</td><td>{positiivisa} %</td></tr>
        </tbody>
    )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)