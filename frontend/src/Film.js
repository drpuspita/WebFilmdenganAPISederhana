import './Film.css'
import script from './script';

function Film() {
    return(
        <div>
    <h1 className="centered">FilmKu</h1>
    <header>
      <form id="form">
        <input type="text" placeholder="Search" id="search" className="search"/>
      </form>
    </header>
    <div id="tags"></div>
    <div id="myNav" className="overlay">
      <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>

      <div className="overlay-content" id="overlay-content"></div>
      <a href="javascript:void(0)" className="arrow left-arrow" id="left-arrow">&#8656;</a>
      <a href="javascript:void(0)" className="arrow right-arrow" id="right-arrow">&#8658;</a>

    </div>
    <main id="main"></main>
    <div className="pagination">
      <div className="page" id="prev">Sebelumnya</div>
      <div className="current" id="current">1</div>
      <div className="page" id="next">Selanjutnya</div>
      
    </div>
    <script src="script.js"></script>
  </div>
    )
}

export default Film;