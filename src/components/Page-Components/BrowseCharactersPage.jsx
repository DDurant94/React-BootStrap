import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { array } from "prop-types";
import "./../Styles-Components/CharacterListStyles.css";


const CharacterList = ({characters}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(characters.length > 0){
      setLoading(false);
    }

  });

  if(loading) return <p className="text-center fs-1 text-dark-emphasis">Loading...</p>;

  return (
    <section className='container-fluid-center bg-dark border border-dark rounded shadow m-2'>

      <div className='container-fluid-center m-3 p-3 font-monospace'>

        <h2 className='text-center text-white mb-5'>Marvel Characters:</h2>

        <ul className='m-0 p-0'>
          
          <div className="row g-1 border border-danger-subtle p-3 rounded mt-2 shadow bg-dark">

            {characters.map(character => (
            <li id="characters" key={character.id} className='col-lg-4 col-md-4 col-sm-6 bg-dark text-light p-3 list-group-item border border-white rounded'>
              {<NavLink to={`/character-details/${character.id}`} ><img id="character-list-img" className='img-fluid rounded' src={ `${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Picture of ${character.name}`}  /> <br /></NavLink>}
            <h3 className='text-center mt-4'>{character.name}</h3> <br />
            </li>))}
            
          </div>

        </ul>

      </div>

    </section>

  );


};

CharacterList.propTypes = {
  characters: array
}

export default CharacterList;