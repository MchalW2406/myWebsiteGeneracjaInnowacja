function App() {
  var curLang = 0;
  const texts = [["O mnie: Michał Wójtowicz","Najważniejsze informacje o mnie","Wiek: ","18 lat","Data urodzenia: ","24 czerwca","Zainteresowania: ",
    "Po szkole bardzo lubię grać w różne gry komuterowe oraz czytać książki, najczęściej fantastykę. Lubię również rysować, zarówno tradycyjnie jak i "+
    "cyfrowo oraz bawić się grafiką komputerową, np. poprzez tworzenie pixel artów. Lubię również spędzać czas z moją młodszą siostrą","Autor strony: Michał Wójtowicz", "Link do repozytorium"],
  ["About me: Michał Wójtowicz","The most important information about me","Age: ","18 years old","Birth date: ","24th of June","Hobbies: ",
    "After school, I enjoy playing various computer games and reading books, mostly fantasy. I also enjoy drawing, both traditionally and digitally, "+
    +"and playing with computer graphics, for example, by creating pixel art. I also enjoy spending time with my younger sister.","Created by: Michał Wójtowicz", "Repository link"]]
  
  

  const changeLang = (): void => {
    curLang = (curLang += 1) % 2;
    const elements = [document.getElementById("title"),document.getElementById("subTitle"),document.getElementById("ageBold"),document.getElementById("age"),
      document.getElementById("bornBold"),document.getElementById("born"),document.getElementById("interestsBold"),document.getElementById("interests"),
    document.getElementById("author"),document.getElementById("link")]
    console.log(elements[0])
    
    for(let i = 0; i < 10; i++){
      if(elements[i]){
        console.log("dfdfssdfdf")
        elements[i].textContent = texts[curLang][i];
      }
    }
    
    
  }

  return (
    <>
      <div className='bg-amber-300 text-center h-18'>
        <h1 id="title" className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl text-amber-400">O mnie: Michał Wójtowicz</h1>
      </div>
      <div id="subTitle" className='bg-amber-200 text-center h-10 text-2xl font-bold tracking-tight text-heading md:text-5xl lg:text-4xl text-amber-400'>Najważniejsze informacje o mnie</div>
      <div className="w-full h-180 bg-amber-100 pt-7">
        <div className='text-2xl mb-4 ml-6 text-amber-500'><b id="ageBold">Wiek:</b><span id="age"> 18 lat</span></div>
        <div className='text-2xl mb-4 ml-6 text-amber-500'><b id="bornBold">Data urodzenia:</b><span id="born"> 24 czerwca</span></div>
        <div className='text-2xl mb-4 ml-6 text-amber-500'><b id="interestsBold">Zainteresowania:</b><span id="interests"> Po szkole bardzo lubię grać w różne gry komuterowe oraz czytać książki, najczęściej fantastykę. Lubię również rysować, zarówno
        tradycyjnie jak i cyfrowo oraz bawić się grafiką komputerową, np. poprzez tworzenie pixel artów. Lubię również spędzać czas z moją młodszą siostrą</span></div>
        <button className="border-solid border-amber-500 border-2 w-60 h-10 bg-amber-200 text-amber-400 rounded-xl mt-110 ml-6" onClick={() => changeLang()}>Zmień język/Change language</button>     
      </div>
      
      <footer className="w-full h-20 bg-amber-200 fixed bottom-0 text-lg text-amber-400"><span id="author">Autor strony: Michał Wójtowicz</span><br/><a id="link" href='https://github.com/MchalW2406/myWebsiteGeneracjaInnowacja' target='_blank'>Link do repozytrium</a></footer>
    </>
  )
}
export default App
