import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]

  return (
    <div>
      <Otsikko otsikko={kurssi}/>
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
            <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
            <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    const yhteensaTehtavia = props.osat[0].tehtavia+props.osat[1].tehtavia+props.osat[2].tehtavia
    return (
        <p>yhteensä {yhteensaTehtavia} tehtävää</p>
    )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)