const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
          {bread.hasGlutenParagraph()}
        </p>
        <p>{bread.getBakedBy()}</p>
        <a href={`/breads/${bread._id}/edit`}>
          <button>Edit</button>
        </a>
        <img src={bread.image} alt={bread.name} />
        <form action={`/breads/${bread._id}?_method=DELETE`} method='POST'>
          <input type="submit" value='DELETE' />
        </form>
      </Default>
    )
}

module.exports = Show