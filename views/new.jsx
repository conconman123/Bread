const React = require('react')
const Default = require('./layouts/default')
const { link } = require('../controllers/bread')

//breads is the name of the array of objects
function Index ({ breads }) {
    const breadDisplay = breads.map((bread,i) => {
        return (
            //interpolates throught the bread array
            //adds a hyperlink to the index of the breads array (which changes the webpage because of the code in bread.js in controllers/models)
            <li key={i}>
                <a href={`/breads/${i}`}>
                    {bread.name}
                </a>
            </li>
        )
    })

    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {breadDisplay}
        </ul>
        <div>
            <a href = '/breads/new'>
            <button>
                Add a new bread
            </button>
            </a>
        </div>
      </Default>
    )
}

module.exports = Index