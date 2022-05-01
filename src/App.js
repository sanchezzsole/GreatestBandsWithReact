import s from "../src/stylesheets/App.module.css"
import History from "../src/components/History/History"

function App() {
  return (
    <div className={s.App}>
        <h1>GREATEST ROCK BANDS</h1>
      <div className={s.container}>

        <History
          band="The Beatles"
          country="Reino Unido"
          history="Grupo británico de música rock y pop, el más admirado y popular de la década de 1960 y uno de los más influyentes en la historia de la música moderna.
          A partir de 1962, año en que quedó configurado de forma estable, y hasta su separación oficial en 1970, los integrantes de The Beatles fueron John Lennon (Liverpool, 1940), Paul McCartney (Liverpool, 1942), George Harrison (Liverpool, 1943) y Ringo Starr (Liverpool, 1940)."
          image="beatles"
        />
        <History
          band="Rolling Stones"
          country="Reino Unido"
          history="Grupo de rock británico integrado por Mick Jagger (Dartford, 1943), Brian Jones (Cheltenham, 1944), Keith Richards (Dartford, 1943), Bill Wyman (Londres, 1936) y Charlie Watts (Londres, 1941). Su incidencia comercial y artística se expande en su inmensa influencia dentro del universo rock, con notoria ascendencia en las bandas estadounidenses garage rock 60’s, el hard rock 70’s o las clásicas formas del rock’n’roll, base fundamental de sus composiciones."
          
          image="rolling-stones"
        />
        <History
          band="Queen"
          country="Reino Unido"
          history="Banda de rock británica creada en 1970, formada por Freddie Mercury (voz), Brian May (guitarra), Roger Taylor (batería) y John Deacon (bajo).
          La espectacularidad y dinamismo de sus actuaciones y la asimilación al rock de tendencias jazzísticas, sinfónicas y operísticas fueron algunas de las claves de su éxito, tan abrumador que sus discos fueron superventas incluso después del fallecimiento en 1991 de su líder, el cantante Freddie Mercury." 
     
          image="queen"
        />
        <History
          band="Pink Floyd"
          country="Reino Unido"
          history="Grupo británico de pop rock, integrado originalmente por Syd Barret (Cambridge, 1946), Nick Mason (Birmingham, 1945), Roger Waters (Cambridge, 1944) y Richard Wright (Londres, 1945). El grupo pasó por dos etapas bien definidas, la primera con Roger Waters y Syd Barret como líderes creativos (papel que asumió el guitarrista David Gilmour), y la segunda tras la marcha de Roger Waters."

          image="pink-floyd"
        />
      </div>
    </div>
  );
}

export default App;
